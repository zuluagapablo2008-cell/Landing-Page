# Kairo — Landing page

Sitio estático de una sola página. Sin build, sin dependencias: `index.html` se sirve tal cual.

```
index.html          Sitio completo (HTML + CSS + SVG en un solo archivo)
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

## Antes de publicar

- El CTA abre WhatsApp al **+57 305 312 8087** con el texto del visitante ya escrito ("Hola, equipo de Kairo Escala. Quiero agendar mi llamada estratégica."). El número y el texto viven en la constante `WA` del `<script>` de `index.html` y en los tres `href` a `wa.me`.
- **Mensaje de bienvenida (de Kairo al visitante)**: no se puede enviar desde la página; lo manda WhatsApp Business al recibir el primer mensaje. En la app: Configuración → Herramientas para la empresa → Mensaje de bienvenida → activar → Enviar a: todos. Texto sugerido:

  > ¡Hola! Gracias por escribir a Kairo Escala 🚀 Somos el equipo que va a revisar tu negocio. Cuéntanos en una línea a qué se dedica tu empresa y te proponemos horario para la llamada estratégica de 30 minutos, sin costo.

- `hola@kairoescala.com` en el pie: confirmar que es el correo real.
- Resultados: las tres cifras son de ejemplo (marcadas con el chip "Cifras de ejemplo"); reemplazar por casos reales.
- Si el dominio final no es el de Vercel, agregar `<link rel="canonical">` y una `og:image` de 1200×630 para que se vea bien al compartir por WhatsApp.
