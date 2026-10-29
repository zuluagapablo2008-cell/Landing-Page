/* =====================================================================
   Acceso a Upstash Redis por su API REST.

   Sin dependencias a propósito: el sitio no tiene build ni node_modules,
   y Upstash responde a un POST normal con fetch. Vercel pone las claves
   solo al conectar el store; aceptamos los dos juegos de nombres que ha
   usado (KV_* cuando se crea como Vercel KV, UPSTASH_* desde el
   marketplace) para que funcione se haya creado como se haya creado.
   ===================================================================== */

const BASE = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';

const DIAS_QUE_GUARDAMOS = 60 * 60 * 24 * 120; // 120 días de series por día
const MAX_LEADS = 1000;

const hayTienda = () => Boolean(BASE && TOKEN);

/** Ejecuta varios comandos en una sola ida y vuelta. Devuelve los resultados en orden. */
async function pipeline(comandos) {
  if (!hayTienda()) throw new Error('sin-tienda');
  const r = await fetch(BASE + '/pipeline', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(comandos),
  });
  if (!r.ok) throw new Error('upstash respondió ' + r.status);
  const datos = await r.json();
  if (!Array.isArray(datos)) throw new Error('upstash devolvió algo inesperado');
  return datos.map(d => (d && typeof d === 'object' && 'result' in d ? d.result : null));
}

/** Fecha de hoy en Colombia (UTC-5, sin horario de verano) como YYYY-MM-DD. */
const hoyCO = () => new Date(Date.now() - 5 * 3600 * 1000).toISOString().slice(0, 10);

/** Los últimos n días en Colombia, del más viejo al más nuevo. */
function ultimosDias(n) {
  const out = [];
  for (let i = n - 1; i >= 0; i--) {
    out.push(new Date(Date.now() - 5 * 3600 * 1000 - i * 86400000).toISOString().slice(0, 10));
  }
  return out;
}

/** Lee el cuerpo de la petición como objeto, venga ya parseado o como texto. */
function cuerpo(req) {
  const b = req.body;
  if (!b) return {};
  if (typeof b === 'object') return b;
  try { return JSON.parse(b); } catch { return {}; }
}

/** Recorta y limpia un texto que viene de fuera. */
const limpio = (v, max) => String(v == null ? '' : v).replace(/\s+/g, ' ').trim().slice(0, max);

/** La IP de quien llama, para el límite de envíos. */
const ipDe = req => String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'desconocida';

module.exports = {
  hayTienda, pipeline, hoyCO, ultimosDias, cuerpo, limpio, ipDe,
  DIAS_QUE_GUARDAMOS, MAX_LEADS,
};
