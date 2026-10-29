# Kairo — Landing page

Sitio estático sin build ni dependencias. Lo único que corre en servidor son
tres funciones pequeñas en `api/`, para medir la página y guardar lo que deja
el formulario.

```
index.html          Landing completa (HTML + CSS + SVG en un solo archivo)
formulario.html     El formulario; al enviarlo abre WhatsApp
panel.html          Panel interno: estadísticas y respuestas (/panel)
api/_tienda.js      Acceso a Upstash Redis por su API REST
api/evento.js       Registra visitas y clics en el CTA
api/lead.js         Guarda una respuesta del formulario
api/panel.js        Lo que lee el panel (pide clave)
favicon.svg         Ícono del cohete
vercel.json         Configuración de Vercel (URLs limpias + headers)
.artifact/          Versión del mismo sitio para el Artifact de Claude (sin <head>)
```

## Ver en local

Cualquier servidor estático sirve. Sin nada instalado, basta abrir el archivo:

```bash
xdg-open index.html
```

## Desplegar en Vercel

### Opción A — desde GitHub (recomendada)

1. Crear un repo vacío en GitHub y hacer push de esta carpeta.
2. En [vercel.com/new](https://vercel.com/new), importar el repo.
3. Framework Preset: **Other**. Build Command: vacío. Output Directory: vacío (raíz).
4. Deploy. Cada `git push` a `main` vuelve a desplegar solo.

### Opción B — desde la terminal

Requiere Node.js instalado.

```bash
npm i -g vercel && vercel login && vercel --prod
```

## Encender el panel (una sola vez)

Sin estos dos pasos la página funciona igual, pero no guarda nada y `/panel`
no abre. Los dos se hacen en el panel de Vercel, en el proyecto de la landing.

**1 · Crear el store.** Storage → Create Database → **Upstash for Redis**.
Elegir la región más cercana (`us-east-1` sirve) y el plan gratis. Al terminar,
*Connect to Project* y conectarlo a este proyecto. Vercel escribe solo las
variables (`KV_REST_API_URL` y `KV_REST_API_TOKEN`, o las `UPSTASH_*`); el
código acepta cualquiera de los dos juegos de nombres.

**2 · Poner la clave del panel.** Settings → Environment Variables → nueva
variable llamada `PANEL_CLAVE`, con la contraseña que vayan a usar para entrar
a `/panel`. Marcarla para Production, Preview y Development.

**3 · Volver a desplegar**, para que las funciones vean las variables.

Después, `kairoescala.com/panel` pide esa clave y muestra el embudo, los
últimos 14 días y todas las respuestas del formulario, con botón para bajarlas
en CSV. La clave se guarda solo en la pestaña (`sessionStorage`) y se borra al
cerrarla.

### Qué se mide y qué no

Se guardan cuatro eventos: `visita`, `cta` (con cuál de los seis botones),
`form_abierto` y `form_enviado`. Para contar personas distintas se usa un
número al azar que vive en el `sessionStorage` del visitante. **No se guarda
IP, ni cookies, ni nada que identifique a nadie**, y no se carga ningún script
de terceros. Las series por día se borran solas a los 120 días; de las
respuestas del formulario se conservan las últimas 1.000.

Si el store se cae o todavía no está conectado, la página y el formulario
siguen funcionando: el formulario detecta que no pudo guardar y entonces sí
manda todas las respuestas dentro del mensaje de WhatsApp, para no perder el
contacto.

## Antes de publicar

- El CTA de la landing dice **"Dinos qué te está costando"** y lleva a `formulario.html`. Al enviarlo se abre WhatsApp al **+57 305 312 8087** con un mensaje corto ("Hola, mi nombre es … Estoy interesado en sus servicios y ya llené el formulario."); las respuestas no van en el mensaje, van al panel. El número vive en la constante `WA_NUM` del `<script>` de `formulario.html`.
- **Mensaje de bienvenida (de Kairo al visitante)**: no se puede enviar desde la página; lo manda WhatsApp Business al recibir el primer mensaje. En la app: Configuración → Herramientas para la empresa → Mensaje de bienvenida → activar → Enviar a: todos. Texto sugerido:

  > ¡Hola! Gracias por escribir a Kairo Escala 🚀 Somos el equipo que va a revisar tu negocio. Cuéntanos en una línea a qué se dedica tu empresa y te proponemos horario para la llamada estratégica de 30 minutos, sin costo.

- `hola@kairoescala.com` en el pie: confirmar que es el correo real.
- Resultados: las tres cifras son de ejemplo (marcadas con el chip "Cifras de ejemplo"); reemplazar por casos reales.
- Si el dominio final no es el de Vercel, agregar `<link rel="canonical">` y una `og:image` de 1200×630 para que se vea bien al compartir por WhatsApp.
