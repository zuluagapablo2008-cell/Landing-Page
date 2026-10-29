# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS, dos páginas (`index.html` y `formulario.html`) + carpeta `assets/`, desplegado en Vercel con `vercel --prod` (heredado del proyecto existente; sin framework ni build).

## Users

Dueños y gerentes de **empresas medianas / B2B** en Latinoamérica que llegan desde el celular (anuncio, WhatsApp o Instagram). Tienen operación establecida pero procesos manuales, presencia digital floja y poco tiempo. Su trabajo aquí: decidir en menos de un minuto si vale la pena agendar una llamada.

## Product Purpose

KAIRO ESCALA es una agencia de servicios digitales. Diseña, construye y opera: automatización de procesos, diseño web y aplicaciones, publicidad en Meta, edición de video y marketing digital. La landing existe para una sola cosa: que el visitante **llene el formulario** y, al final de él, agende la llamada. Éxito = formulario enviado y conversación iniciada por WhatsApp con el contexto ya puesto.

## Positioning

Un solo equipo que cubre todo el frente digital de una empresa (automatización + web/apps + pauta + video + marketing) en vez de cinco proveedores que no se hablan. La promesa es escalar: recuperar tiempo del dueño, mejor diseño, presencia digital seria y procesos que funcionan solos.

## Operating Context

- Visita casi siempre en celular, en vertical, con una mano; la versión móvil es la prioridad y la de escritorio es secundaria.
- El CTA único es "Dinos qué te está costando" y lleva a `formulario.html`, una página aparte, en la misma pestaña (el enlace es relativo y sin `target`: con ruta absoluta solo funcionaba en Vercel, y `target="_blank"` lo bloquean los navegadores embebidos de Instagram y WhatsApp, que es por donde llega casi todo el tráfico). El formulario recoge el contexto de la empresa (a qué se dedica, qué necesita, dolor principal, cuánto puede invertir); al enviarlo las respuestas van al panel interno y se abre WhatsApp con un mensaje corto de presentación.
- Toda la página es un embudo: cada bloque empuja al mismo CTA (dolor → promesa → servicios → prueba → proceso → cierre).

## Capabilities and Constraints

- Servicios confirmados (8): automatización de procesos, funnels de venta y diseños web, soluciones con IA, marketing digital, publicidad paga en redes sociales, edición de videos, tiendas virtuales, creación de contenido.
- Los ocho son la puerta de entrada, **no el límite**: el encargo real suele ser una mezcla, y la propuesta se arma a partir del problema que trae el visitante. La página lo dice explícitamente (ficha "¿Y si lo tuyo no está en la lista?" al cierre de Servicios) junto con el compromiso de decir que no cuando algo no sea para nosotros.
- Trayectoria: 3 años en negocios digitales y **9 empresas acompañadas**.
- Frase rectora, tal como la dio el cliente: **"Dinos en qué estás perdiendo plata y tiempo. Nosotros lo solucionamos."** Es el argumento de la página y va en dos puntos: al cerrar Dolores y como titular del cierre.
- Fundación CREO: la campaña duró **tres meses** y en ese plazo se duplicaron seguidores y conversiones. Los seguidores son verificables en las capturas (4.673 → 9.794); las conversiones las aporta el cliente y van en la píldora de plazo, no como cifra grande.
- Contacto público: solo WhatsApp y el horario. El correo salió del pie el 16/10 por decisión del cliente.
- Idioma: español neutro latinoamericano.
- **Abierto:** número de WhatsApp real (marcador `+57 300 000 0000` hasta recibirlo).
- **Abierto:** resultados reales con números (el cliente los tiene y los enviará; hasta entonces se usan cifras de ejemplo marcadas como tal en el código y en pantalla).
- Formulario propio en su propia página, **con backend desde el 29/10**: tres funciones en `api/` sobre Upstash Redis. Las respuestas se guardan y se leen en `/panel`; el mensaje de WhatsApp quedó corto a propósito ("Hola, mi nombre es … y ya llené el formulario"), porque pegar todas las respuestas ahí se veía mal. Si el servidor no responde, el formulario vuelve al mensaje largo para no perder el contacto.
- El paso de elegir día y hora **se quitó el 29/10** por decisión del cliente: alargaba el formulario y no reservaba nada de verdad. La hora se acuerda por WhatsApp.
- **Panel interno en `/panel`**, protegido con la variable de entorno `PANEL_CLAVE`: embudo (visitantes → visitas → clics en el CTA → formulario abierto → formulario enviado), serie de 14 días, de dónde llega la gente, qué botón tocan, qué servicios piden, y las respuestas con descarga en CSV.
- Medición propia, sin terceros: no se usan cookies ni se guarda la IP; para contar personas distintas se usa un id al azar en el `sessionStorage` del visitante. Las series por día caducan a los 120 días y se conservan las últimas 1.000 respuestas.
- **Abierto:** el store de Upstash y `PANEL_CLAVE` los tiene que crear el cliente en el panel de Vercel (pasos en el README). Hasta entonces la página funciona, pero no guarda nada y `/panel` no abre.

## Brand Commitments

- Nombre: **KAIRO ESCALA** (wordmark "KAIRO" con la A reemplazada por un cohete que deja estela azul→morado; "ESCALA" en versalitas espaciadas entre dos líneas).
- Colores vinculantes: **azul y morado** (la estela del logo: azul eléctrico ~#3B6BFF → violeta ~#7B3BFF), sobre fondo negro/noche. El logo vive sobre negro.
- Mascota oficial: cohete blanco 3D con un solo ojo grande (visor oscuro), llama azul→violeta. Descrita por el cliente como "discreta · simple · icónica". Hoja de 9 ángulos (frente, 45° derecha, lado derecho, 135° derecha, espalda, 225° izquierda, lado izquierdo, 315° izquierda, arriba) y 8 gestos (feliz, sorprendido, confiado, apuntando, celebrando, pensativo, corriendo/veloz, descansando).
- Tono pedido: profesional pero creativo; "nada genérico"; título enganchador; todo el texto vende el CTA.
- Intro: el cohete asciende al cargar y **se queda flotando** en el hero sin corte brusco. Decisión confirmada: el ascenso se recrea con la mascota (no con el video), para continuidad y peso en móvil.
- Un cohete pequeño recorre la sección de servicios.

## Evidence on Hand

- `assets/img-a.png` 1254×1254: logo KAIRO ESCALA sobre negro.
- `assets/img-b.png` 1254×1254: hoja de mascota (9 ángulos + 8 gestos) sobre negro.
- `assets/intro.mp4` 6 s 1920×1080 3.2 MB: cohete ascendiendo en diagonal sobre cielo nocturno; el cohete sale del cuadro al final. No se usa en la intro (ver Brand Commitments); disponible como material secundario.
- **No hay** testimonios, logos de clientes ni cifras confirmadas todavía. No fabricar ninguno como real.

## Product Principles

1. Cada pantalla de celular termina en el CTA o en el paso que lleva a él.
2. Dolor primero, servicio después: el visitante se reconoce antes de leer qué vendemos.
3. La mascota narra, no decora: cada aparición acompaña un paso del embudo.
4. Nada de cifras o pruebas inventadas; lo que no exista se marca como ejemplo.
5. Ligero: la intro y las animaciones no pueden costar más que un par de imágenes.
