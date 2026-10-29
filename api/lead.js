/* =====================================================================
   Guarda una respuesta del formulario.

   Es lo que antes viajaba dentro del mensaje de WhatsApp. Ahora el
   mensaje va corto y los datos quedan aquí, para verlos en /panel.
   ===================================================================== */

const {
  hayTienda, pipeline, hoyCO, cuerpo, limpio, ipDe,
  DIAS_QUE_GUARDAMOS, MAX_LEADS,
} = require('./_tienda');

const OBLIGATORIOS = ['nombre', 'empresa', 'giro', 'dolor', 'inversion', 'whatsapp'];
const TOPE_POR_MINUTO = 5;

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'solo POST' });
    return;
  }
  if (!hayTienda()) {
    // El formulario sabe leer esto y manda los datos dentro del WhatsApp
    // para que no se pierda el lead mientras el store no esté conectado.
    res.status(503).json({ ok: false, error: 'sin-tienda' });
    return;
  }

  const d = cuerpo(req);
  const lead = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    fecha: new Date().toISOString(),
    nombre: limpio(d.nombre, 120),
    empresa: limpio(d.empresa, 120),
    giro: limpio(d.giro, 300),
    web: limpio(d.web, 200),
    servicios: Array.isArray(d.servicios) ? d.servicios.slice(0, 12).map(s => limpio(s, 60)).filter(Boolean) : [],
    dolor: limpio(d.dolor, 1500),
    inversion: limpio(d.inversion, 80),
    whatsapp: limpio(d.whatsapp, 40),
    correo: limpio(d.correo, 160),
    fuente: limpio(d.fuente, 40),
  };

  const faltan = OBLIGATORIOS.filter(k => !lead[k]);
  if (faltan.length) {
    res.status(400).json({ ok: false, error: 'faltan datos', faltan });
    return;
  }

  const hoy = hoyCO();

  try {
    // Freno simple contra envíos repetidos desde la misma conexión.
    const clave = 'kp:rl:' + ipDe(req);
    const [cuantos] = await pipeline([['INCR', clave], ['EXPIRE', clave, 60]]);
    if (Number(cuantos) > TOPE_POR_MINUTO) {
      res.status(429).json({ ok: false, error: 'demasiados envíos seguidos' });
      return;
    }

    const comandos = [
      ['LPUSH', 'kp:leads', JSON.stringify(lead)],
      ['LTRIM', 'kp:leads', 0, MAX_LEADS - 1],
      ['INCR', 'kp:tot:form_enviado'],
      ['INCR', 'kp:dia:' + hoy + ':form_enviado'],
      ['EXPIRE', 'kp:dia:' + hoy + ':form_enviado', DIAS_QUE_GUARDAMOS],
    ];
    lead.servicios.forEach(s => comandos.push(['HINCRBY', 'kp:servicios', s, 1]));
    if (lead.inversion) comandos.push(['HINCRBY', 'kp:inversion', lead.inversion, 1]);

    await pipeline(comandos);
    res.status(200).json({ ok: true, id: lead.id });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'no se pudo guardar' });
  }
};
