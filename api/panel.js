/* =====================================================================
   Lo que lee el panel: el embudo, la serie de los últimos 14 días y los
   leads guardados.

   Protegido con una clave que vive en la variable de entorno
   PANEL_CLAVE. Sin esa variable no devuelve nada: más vale un panel que
   no abre que uno que enseña los datos de los clientes a cualquiera.
   ===================================================================== */

const crypto = require('crypto');
const { hayTienda, pipeline, ultimosDias } = require('./_tienda');

const EVENTOS = ['visita', 'cta', 'form_abierto', 'form_enviado'];
const DIAS = 14;

/** Compara sin filtrar por el tiempo que tarda. */
function claveCorrecta(dada, real) {
  if (!real) return false;
  const a = Buffer.from(String(dada || ''), 'utf8');
  const b = Buffer.from(real, 'utf8');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

const aHash = arr => {
  // Upstash devuelve los hashes como lista plana: campo, valor, campo, valor…
  const out = {};
  if (!Array.isArray(arr)) return out;
  for (let i = 0; i < arr.length - 1; i += 2) out[arr[i]] = Number(arr[i + 1]) || 0;
  return out;
};

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  const real = process.env.PANEL_CLAVE || '';
  if (!real) {
    res.status(503).json({ ok: false, error: 'sin-clave' });
    return;
  }
  if (!claveCorrecta(req.headers['x-clave'], real)) {
    res.status(401).json({ ok: false, error: 'clave incorrecta' });
    return;
  }
  if (!hayTienda()) {
    res.status(503).json({ ok: false, error: 'sin-tienda' });
    return;
  }

  const dias = ultimosDias(DIAS);

  try {
    const comandos = [
      ...EVENTOS.map(e => ['GET', 'kp:tot:' + e]),
      ['PFCOUNT', 'kp:uniq:total'],
      ['HGETALL', 'kp:cta'],
      ['HGETALL', 'kp:fuente'],
      ['HGETALL', 'kp:servicios'],
      ['HGETALL', 'kp:inversion'],
      ['LRANGE', 'kp:leads', 0, 299],
      ...dias.flatMap(f => [
        ...EVENTOS.map(e => ['GET', 'kp:dia:' + f + ':' + e]),
        ['PFCOUNT', 'kp:uniq:' + f],
      ]),
    ];

    const r = await pipeline(comandos);
    let i = 0;
    const totales = {};
    EVENTOS.forEach(e => { totales[e] = Number(r[i++]) || 0; });
    const unicos = Number(r[i++]) || 0;
    const cta = aHash(r[i++]);
    const fuente = aHash(r[i++]);
    const servicios = aHash(r[i++]);
    const inversion = aHash(r[i++]);

    const crudos = Array.isArray(r[i++]) ? r[i - 1] : [];
    const leads = crudos.map(t => { try { return JSON.parse(t); } catch { return null; } }).filter(Boolean);

    const serie = dias.map(fecha => {
      const dia = { fecha };
      EVENTOS.forEach(e => { dia[e] = Number(r[i++]) || 0; });
      dia.unicos = Number(r[i++]) || 0;
      return dia;
    });

    res.status(200).json({
      ok: true,
      generado: new Date().toISOString(),
      totales, unicos, serie, cta, fuente, servicios, inversion, leads,
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'no se pudo leer la tienda' });
  }
};
