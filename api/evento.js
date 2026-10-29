/* =====================================================================
   Registra un evento de la página: una visita, un clic en el CTA, el
   formulario abierto. Lo llama el beacon de index.html y formulario.html.

   Guarda tres cosas por evento: el total histórico, el total del día, y
   el visitante en un HyperLogLog para contar personas sin guardar quién
   es nadie. No se guarda IP, ni cookie, ni nada que identifique a una
   persona: el id del visitante es un número al azar que vive en el
   sessionStorage de su navegador.
   ===================================================================== */

const { hayTienda, pipeline, hoyCO, cuerpo, limpio, DIAS_QUE_GUARDAMOS } = require('./_tienda');

const EVENTOS = new Set(['visita', 'cta', 'form_abierto', 'form_enviado']);

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'solo POST' });
    return;
  }

  const datos = cuerpo(req);
  const ev = limpio(datos.ev, 24);
  if (!EVENTOS.has(ev)) {
    res.status(400).json({ ok: false, error: 'evento desconocido' });
    return;
  }

  // Sin store conectado no es un error del visitante: la página sigue andando.
  if (!hayTienda()) {
    res.status(200).json({ ok: false, error: 'sin-tienda' });
    return;
  }

  const hoy = hoyCO();
  const vid = limpio(datos.vid, 40) || 'anon';
  const comandos = [
    ['INCR', 'kp:tot:' + ev],
    ['INCR', 'kp:dia:' + hoy + ':' + ev],
    ['EXPIRE', 'kp:dia:' + hoy + ':' + ev, DIAS_QUE_GUARDAMOS],
    ['PFADD', 'kp:uniq:' + hoy, vid],
    ['EXPIRE', 'kp:uniq:' + hoy, DIAS_QUE_GUARDAMOS],
    ['PFADD', 'kp:uniq:total', vid],
  ];

  // De dónde llegó: sirve para saber si la pauta y los QR están trayendo gente.
  const fuente = limpio(datos.fuente, 40);
  if (ev === 'visita' && fuente) comandos.push(['HINCRBY', 'kp:fuente', fuente, 1]);

  // Cuál de los seis botones de la página se tocó.
  const donde = limpio(datos.donde, 40);
  if (ev === 'cta' && donde) comandos.push(['HINCRBY', 'kp:cta', donde, 1]);

  try {
    await pipeline(comandos);
    res.status(200).json({ ok: true });
  } catch (e) {
    // Medir nunca puede romper la página: respondemos 200 y lo dejamos pasar.
    res.status(200).json({ ok: false, error: 'no se pudo guardar' });
  }
};
