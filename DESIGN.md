---
name: Kairo Escala
description: Landing de escalada. Noche azul-negro, una sola energía azul→violeta, Archivo en dos anchos, una regla de altitud con lectura viva junto al cohete y una estela que abre cada sección.
colors:
  ground: "#07080F"
  ink: "#F3F4FB"
  ink-2: "#AEB4CF"
  ink-3: "#7A819F"
  line: "rgba(150,162,225,.16)"
  line-strong: "rgba(150,162,225,.34)"
  blue: "#3B6BFF"
  violet: "#7B3BFF"
  focus-blue: "#8FA8FF"
  lavender-note: "#C7B4FF"
  white: "#FFFFFF"
typography:
  display-tight:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.35rem, 10.4vw, 4.9rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "wdth 100"
  display-wide:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 11vw, 5.8rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "wdth 125"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.7rem, 6.8vw, 2.8rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "wdth 125"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 5.6vw, 1.75rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "wdth 125"
  figure:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 9vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "wdth 125"
    fontFeature: "tnum"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "wdth 100"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "wdth 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.04em"
    fontVariation: "wdth 100"
rounded:
  none: "0"
  hair: "2px"
  focus: "6px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "20px"
  gutter-desktop: "40px"
  content-l: "56px"
  content-l-desktop: "104px"
  rail-x: "12px"
  rail-w: "22px"
  nav-h: "60px"
  sticky-h: "76px"
  rocket-w: "168px"
  rocket-w-desktop: "320px"
  hero-gap: "20px"
  hero-gap-desktop: "28px"
  row: "22px"
  row-desktop: "28px"
  estela-h: "72px"
  estela-h-desktop: "150px"
  section-bottom: "72px"
  section-bottom-desktop: "128px"
  head-gap: "34px"
  head-gap-desktop: "56px"
  maxw: "1120px"
components:
  button-primary:
    backgroundColor: "linear-gradient(100deg, #3B6BFF 0%, #7B3BFF 100%)"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-primary-hero-desktop:
    backgroundColor: "linear-gradient(100deg, #3B6BFF 0%, #7B3BFF 100%)"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-primary-nav:
    backgroundColor: "linear-gradient(100deg, #3B6BFF 0%, #7B3BFF 100%)"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "42px"
  link-more:
    textColor: "{colors.ink-2}"
    padding: "4px 0"
  chip-ejemplo:
    backgroundColor: "transparent"
    textColor: "{colors.lavender-note}"
    rounded: "{rounded.pill}"
    padding: "6px 10px"
  nav:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-2}"
    height: "60px"
  cta-sticky:
    backgroundColor: "{colors.ground}"
    padding: "10px 20px"
    height: "76px"
---

# Design System: Kairo Escala

## Overview

**Creative North Star: "La escalada"**

La página es una escalada y el scroll es progreso. Una regla de altitud vive pegada al borde izquierdo (marcas hairline, un relleno azul→violeta que crece con el scroll, una escala fija en escritorio y una lectura en metros que viaja junto al cohete), y la mascota cohete es un solo objeto que asciende al cargar, flota en el hero y, al hacer scroll, se acopla a la regla y sube con ella. Cada sección se abre con una estela: la línea azul→violeta ascendente del trazo del logo, con una cabeza lavanda que brilla. Regla, estela y cohete son el mismo instrumento contado tres veces; nada decora.

El material es noche azul-negra con texto blanco frío, dividida por hairlines tintadas de azul. Hay una sola energía cromática, el degradado azul→violeta, y se gasta con avaricia: llama del cohete, relleno de la regla, estela, botón principal, la marca de cada fila y la segunda cláusula del titular del hero ("escala sin límites.", decisión fijada por el usuario). Densidad editorial: columnas, filas separadas por reglas de 1px y aire; ninguna tarjeta, ningún panel con fondo. Archivo trabaja en dos anchos que hacen todo el contraste tipográfico: expandida (wdth 125) muy negra para titulares de sección, nombres de servicio, cifras y la palabra de cierre; normal (wdth 100) para lectura y para el titular del hero. Los títulos son frases directas; no hay vocabulario de vuelo ni etiquetas sobre los titulares.

Rechazos confirmados por el build: sin hero oscuro con blob degradado, sin tres tarjetas iguales, sin ilustración CSS de la mascota (siempre PNG con alfa), sin kickers ni etiquetas en mayúsculas sobre los titulares, sin iconografía decorativa (los únicos glifos son las flechas de los CTA y el logo de WhatsApp dentro del botón), sin numerales de altitud en los titulares ni en los párrafos (la altitud solo se lee en la regla, pegada al cohete).

**Key Characteristics:**
- Noche azul-negra (`--ground`) y tinta fría en tres pasos; hairlines azuladas en dos intensidades.
- Una sola energía: `--energy` (azul→violeta a 100°) y su versión vertical `--energy-v`; reservada a llama, regla, estela, CTA, marcas de fila y la cláusula degradada del hero.
- Archivo en dos anchos; el ancho es la jerarquía, no el color.
- Sin tarjetas: filas con `border-top`/`border-bottom` de 1px, columnas y padding vertical.
- Las secciones no se separan con hairline sino con la estela (`.estela`), una por sección, siempre al abrir.
- Píldora (999px) solo para botones y el chip de ejemplo; círculos para puntos de ruta, etapas y la cabeza de la estela; todo lo demás recto.
- Movimiento amortiguado con `--ease-out` (cubic-bezier(.16,1,.3,1)); una sola línea de tiempo de scroll que mueve regla, cohete y ruta en el mismo frame.
- Mascota real (PNG alfa) en tres poses y solo donde cuenta algo: hero-45 en el hero y la regla, lado-derecho en la ruta, celebrando en el cierre.

## Colors

Un fondo, tres tintas, dos hairlines, dos colores de energía que solo aparecen juntos y una lavanda de nota.

### Primary
- **Azul eléctrico** (`--blue`): extremo frío del degradado de energía. Nunca aparece plano como relleno; solo como parada de `--energy` / `--energy-v`, del `<linearGradient id="energyStroke">` de la ruta SVG y de la cola transparente de la estela (`rgba(59,107,255,0)` → `.55`). Su versión clara **Azul de foco** (`focus-blue`, `#8FA8FF`) es el único azul plano del sistema: anillo `:focus-visible` (2px, offset 4px), borde de los puntos de etapa del proceso y estado hover del enlace secundario.
- **Violeta** (`--violet`): extremo cálido del mismo degradado, color de `::selection`, punta sólida de la estela (parada 100%) y, al 28% de alfa, halo de 4px alrededor de la cabeza de la estela. Fuera de esos sitios no se usa plano.

### Tertiary
- **Lavanda de nota** (`lavender-note`, `#C7B4FF`): dos usos, ambos pequeños: la cabeza de 10px de la estela (el punto que brilla al final del trazo). Es la luz al final de la energía, no un acento de marca para superficies. (El chip `.ejemplo` que marcaba cifras provisionales se retiró el 13 de octubre, al entrar los casos reales.)

### Neutral
- **Noche** (`--ground`): fondo de página, de `html`, del `theme-color`, del centro de los puntos de ruta y etapa, y base de los degradados de scrim (nav y CTA fija) como `rgba(7,8,15,…)`.
- **Tinta** (`--ink`): texto principal, titulares, cifras, señales, la palabra de cierre; también fondo del enlace "Saltar al contenido".
- **Tinta 2** (`--ink-2`): lead, párrafos de servicio, registro y etapa, enlaces de navegación, descripción de cifras, nota en negrita del cierre, enlace secundario.
- **Tinta 3** (`--ink-3`): subnotas de señales, columna clave del libro, texto tachado "Hoy", duración de etapas, encabezados del pie, nota del cierre, texto pequeño.
- **Hairline** (`--line`): separadores de fila (señales, libro, registros), borde superior del pie y de su base, borde inferior de nav, marcas finas de la regla.
- **Hairline fuerte** (`--line-strong`): borde izquierdo de la regla y de la escalera del proceso, marcas gruesas cada 50px, anillo de los puntos de ruta, ruta punteada de servicios, subrayado del enlace secundario.
- **Blanco puro** (`white`): texto del botón principal, texto de `::selection` y el tick dentro del círculo de energía del libro.

### Named Rules
**La regla de una sola energía.** El degradado azul→violeta es el único color saturado y siempre aparece como degradado, nunca como azul o violeta planos (salvo `::selection`, el azul de foco `#8FA8FF` y el halo violeta al 28% de la cabeza de la estela). Se gasta en: la llama del cohete (viene en el PNG), el relleno de la regla (`--energy-v`), la estela de cada sección, la cláusula "escala sin límites." del hero (`.grad`, `background-clip: text`), el botón principal, el trazo dibujado de la ruta, el centro de los puntos de ruta, la barra de 22×2px de cada señal, el círculo-tick del libro, el primer punto de la escalera y el halo radial del cierre. Una superficie nueva lo usa en un elemento por pantalla además de su estela y su CTA.

**La regla de tres tintas.** El texto solo usa `--ink`, `--ink-2` o `--ink-3` (excepción única: la cláusula degradada del hero). La jerarquía de lectura se hace bajando de tinta, no cambiando de color.

## Typography

**Display Font:** Archivo, eje `wdth` 125, pesos 800 y 900 (con Helvetica Neue, Arial, sans-serif)
**Body Font:** Archivo, eje `wdth` 100, pesos 400/500/600/700/900 (misma pila de respaldo)
**Label/Mono Font:** ninguna distinta; los numerales usan `font-variant-numeric: tabular-nums` (`.num`)

**Character:** Una sola familia haciendo dos voces por ancho. La expandida negra (`.d-wide`) es la voz de los rótulos: titulares de sección, nombres de servicio, cifras y la palabra "Hablemos." del cierre. La normal (`.d-tight`, `body`) es la voz de lectura y del titular del hero, que va a wdth 100 para caber en tres líneas a 390px y lleva su segunda cláusula en degradado. Tracking negativo en todo lo grande; tracking positivo solo en los encabezados del pie. No hay mayúsculas sostenidas en ninguna parte. Los titulares son frases completas con punto cuando son frase ("Si reconoces dos de estas, la llamada vale la pena.") y rótulos sin punto cuando nombran ("Cómo trabajamos").

### Hierarchy
- **Display tight** (`.d-tight`: 900, `clamp(2.35rem,10.4vw,4.9rem)`, 0.98, −.035em, wdth 100, `text-wrap: balance`): solo el `h1` del hero. Su `<span class="grad">` pinta la segunda cláusula con `--energy` recortado al texto.
- **Display wide** (`.orbita-word.d-wide`: 900, `clamp(2.6rem,11vw,5.8rem)`, 0.9, −.02em, wdth 125, `padding-bottom: .06em` para el descendente): una sola palabra, "Hablemos.", que abre el cierre. Es el único uso de display wide.
- **Headline** (`.cota h2.d-wide`: 900, `clamp(1.7rem,6.8vw,2.8rem)`, 0.92, wdth 125, balance, `max-width: 62ch` en la cabecera): titular de sección. El del proceso (`.plan h2`) es `clamp(1.7rem,7vw,2.8rem)`. El `h2` del cierre es la excepción: wdth 100, 700, `clamp(1.5rem,6.2vw,2.4rem)`, −.025em, 1.15, max 22ch, porque va debajo de la palabra grande y es una frase.
- **Title** (`.stop h3`: 800, `clamp(1.25rem,5.6vw,1.75rem)`, 1.05, −.02em, wdth 125): nombre de servicio. Variantes a tamaño fijo: registro `.log h3` 1.2rem / 1.1; etapa `.step h3` 1.25rem / 1.1.
- **Figure** (`.log-n b`: 900, `clamp(2.2rem,9vw,3.2rem)`, 1, −.03em, wdth 125, tabular): la cifra de cada resultado.
- **Señal** (`.senal`: 700, `clamp(1.2rem,5.3vw,1.7rem)`, 1.3, −.02em, wdth 100, `text-wrap: pretty`): frase-dolor; su subnota `<em>` a .92rem/1.45 en `--ink-3`.
- **Libro** (`.libro-alt`: 700, 1.12rem → 1.25rem escritorio, 1.34, −.015em): línea "Con Kairo". Su par `.libro-hoy` a 1rem → 1.05rem, `--ink-3`, tachada con línea de 1px al 45%.
- **Lead** (`.lead`: 400, 1.05rem, 1.55, `--ink-2`, max 34ch; en el hero de escritorio 1.15rem / 40ch; 38ch en el cierre; 52ch en el remate de dolores): entradilla de hero y sección.
- **Body** (`body`: 400, 16px, 1.55): párrafos de servicio (.98rem, max 34/40ch), registro (.98rem, max 46ch), etapa (1rem, max 40ch).
- **Enlace secundario** (`.link-more`: 600, 1rem heredado, `--ink-2`): "Ver qué hacemos por tu negocio".
- **Label** (`.foot h3`: 700, .8rem, +.04em, `--ink-3`): encabezados del pie. Sin mayúsculas.
- **Small** (`.small`: .875rem, `--ink-3`): notas del pie; duración de etapa `.step-d` a .85rem tabular; nota del cierre `.orbita-note` a .9rem.

### Named Rules
**La regla del ancho.** Lo que nombra una sección, un servicio, una cifra o el cierre va en wdth 125 a 800/900. Lo que se lee va en wdth 100. No se mezcla peso y ancho para inventar un tercer nivel; el hero es la única pieza a 900 en wdth 100.

**La regla del numeral tabular.** Toda cifra que se compara (cifras de resultado, duraciones de etapa) lleva `.num`. Ningún número decora: si no es un resultado o una duración, no aparece como numeral grande.

**La regla del titular directo.** Los `h2` dicen lo que la sección hace por el lector, en una frase; no hay kicker, cota, número de paso ni metáfora de vuelo encima o debajo.

## Layout

Móvil primero, un solo breakpoint a **900px**. El contenedor `.wrap` es 100% hasta `--maxw` 1120px, centrado, con `padding-left: var(--content-l)` (56px en celular, 104px en escritorio) que reserva la columna de la regla, y `padding-right: var(--gutter)` (20px / 40px). La regla ocupa `--rail-x` 12px / 28px desde el borde, ancho `--rail-w` 22px / 28px, entre `--nav-h` + 10px y `--sticky-h` + 18px (`--sticky-h` es 76px en celular y 0 en escritorio, donde la CTA fija no existe).

Hero: `min-height: calc(100dvh - var(--nav-h))`, `padding: 34px 0 36px` (40 / 64 en escritorio). En celular `.hero-in` es una rejilla de tres filas `auto minmax(0,1fr) auto` con gap 20px: titular arriba, la fila lead + hueco del cohete (`.hero-row`, flex, gap 14px) ocupa el espacio elástico, y las acciones (`.hero-actions`, grid gap 16px, botón a ancho completo y enlace secundario) quedan ancladas al pie de la primera pantalla. El hueco `.rocket-slot` mide `--rocket-w` (168px) con aspecto 360/486. En escritorio la rejilla pasa a dos columnas `minmax(0,1.05fr) minmax(0,.95fr)`, tres filas `auto auto auto`, column-gap 48px, row-gap 28px; el texto va en la columna 1 (titular alineado abajo, acciones en fila con gap 22px) y el hueco (320px) centrado en la columna 2 abarcando las tres filas. El cohete mismo es un elemento `position: fixed` que JS coloca sobre el hueco.

Ritmo vertical por sección (`.cota`, `.plan`, `.orbita`): `padding-top: 0`; el aire de arriba lo pone la estela (72px de alto + 8px en celular, 150 + 16 en escritorio); abajo 72px / 128px (el cierre 96 / 150). Ninguna sección lleva `border-top`. La cabecera de sección (`.cota-head`, `.plan-head`) apila titular y lead con gap 14px (12 en proceso), `max-width: 62ch` y margen inferior 34px (56 en escritorio; 64 en proceso). Las filas de contenido (señal, libro, registro, parada) llevan padding vertical 20–22px en celular y 26–36px en escritorio.

Rejillas de escritorio: dolores a una columna de 760px; libro `150px minmax(0,1fr) minmax(0,1.2fr)` (clave / Hoy / Con Kairo) con gap 36px; ruta de servicios en tres columnas `1fr 36px 1fr` alternando el texto a izquierda y derecha del punto (impares a la derecha, pares a la izquierda alineados a la derecha); resultados `200px 1fr 300px` con la cifra alineada a la derecha; proceso en cuatro columnas iguales escalonadas por `margin-top` 168 / 112 / 56 / 0 (cada etapa un peldaño más arriba); cierre `1.1fr .9fr` con la estela cruzando ambas columnas (`grid-column: 1 / -1`, margen inferior −40px) y la mascota celebrando a la derecha desbordando −60px; pie `1.2fr 2fr`.

## Elevation & Depth

Sistema plano: la profundidad la dan las hairlines, la tinta y los scrims, no las sombras. Hay exactamente cuatro luces y todas pertenecen a la energía o a la mascota: el resplandor bajo el botón principal (`--glow`), la sombra proyectada del cohete pequeño sobre la ruta, el halo de 4px alrededor de la cabeza de la estela y el halo radial azul→violeta que sube desde el fondo del cierre. Ninguna superficie de contenido tiene fondo propio ni sombra. La nav y la CTA fija flotan sobre el contenido con degradados de `--ground` semitransparente (nav además con `backdrop-filter: blur(10px)`).

### Shadow Vocabulary
- **Resplandor de energía** (`--glow`: `0 14px 30px -16px rgba(14,22,70,.95)`): solo bajo `.btn`; en hover con puntero fino sube a `0 18px 34px -16px rgba(14,22,70,1)` y `translateY(-1px)`.
- **Sombra del cohete de ruta** (`filter: drop-shadow(0 8px 10px rgba(4,6,20,.8))`): solo en `.route-rocket`, para despegarlo de la ruta punteada.
- **Halo de la estela** (`.estela::after`: `box-shadow: 0 0 0 4px rgba(123,59,255,.28)`): anillo violeta plano alrededor del punto lavanda de 10px; es luz, no profundidad.
- **Halo del cierre** (`.orbita::before`: `radial-gradient(60% 60% at 50% 100%, rgba(59,107,255,.28), rgba(123,59,255,.10) 45%, transparent 75%)`): única luz ambiental, anclada al borde inferior de la última sección.
- **Scrim de nav** (`linear-gradient(180deg, rgba(7,8,15,.94), rgba(7,8,15,.72))` + blur 10px) y **scrim de CTA fija** (`linear-gradient(180deg, rgba(7,8,15,0), rgba(7,8,15,.92) 30%, rgba(7,8,15,.98))`): el contenido se funde en la noche, no se tapa con un panel.

### Named Rules
**La regla de la hairline.** Dentro de una sección, las divisiones son líneas de 1px en `--line` o `--line-strong`; nunca un cambio de fondo. Si una superficie nueva necesita agrupar, usa una regla arriba y otra abajo, no una caja.

**La regla de la estela.** Entre secciones no hay hairline: cada sección abre con una `.estela` y solo una. La estela nunca se usa dentro de una fila ni como subrayado.

**La regla de la sombra con dueño.** Solo llevan sombra o halo el botón de energía, la mascota y la cabeza de la estela. Texto, filas, nav y puntos no proyectan.

## Shapes

Recto por defecto: filas, columnas, cabeceras y el pie no tienen radio ni borde de caja. Las únicas curvas son la píldora (`999px`) en botones y en el chip de ejemplo, y el círculo (`50%`) en los puntos de ruta (28px / 36px con anillo de 1.5px y centro de energía), los puntos de etapa del proceso (11px con borde de 2px `#8FA8FF`, el primero relleno de energía), el círculo-tick del libro (16px) y la cabeza de la estela (10px). La barra de señal (22×2px), la línea de la estela (2px) y el relleno de la regla (3px) llevan 2px de radio para no verse serrados. El anillo de foco usa 6px. Bordes: siempre 1px sólidos en hairline; la única excepción es el chip de ejemplo, punteado (`1px dashed rgba(199,180,255,.45)`) para leerse como provisional. La ruta de servicios es un trazo punteado (`stroke-dasharray: 4 7`, 1.5px) sobre el que se dibuja el trazo de energía (2.5px, extremos redondos) según avanza el scroll. La estela es una línea ligeramente ascendente hacia la derecha (rotación −1.6° en celular, −1.1° en escritorio, con origen en el extremo derecho), la única diagonal del sistema.

## Components

### Buttons
Píldora sólida de energía, sin borde, texto blanco a 700. Tacto amortiguado: se hunde al pulsar y sube un píxel en hover solo cuando hay puntero fino.
- **Shape:** píldora completa (`border-radius: 999px`).
- **Primary (`.btn`):** fondo `--energy`, texto `#fff`, `min-height: 52px`, `padding: 0 24px`, 1rem/700, tracking −.005em, `gap: 10px` con la flecha o el glifo de WhatsApp (SVG inline de 18–20px, `stroke`/`fill: currentColor`), `box-shadow: var(--glow)`, `white-space: nowrap`. En hero, cierre y CTA fija ocupa el ancho completo en celular (`width: 100%`) y `width: auto` desde 900px. En el hero de escritorio crece a 56px / `0 28px` / 1.05rem; en el cierre de celular baja a `0 18px` / .95rem para que quepa el glifo.
- **Nav (`.nav .btn`):** misma píldora a 42px de alto, `padding: 0 18px`, .9rem; solo visible desde 900px.
- **Active:** `transform: scale(.97)`, transición `transform 160ms var(--ease-out), box-shadow 200ms ease`.
- **Hover (puntero fino):** `translateY(-1px)` y sombra `0 18px 34px -16px rgba(14,22,70,1)`.
- **Focus:** anillo global `2px solid #8FA8FF`, offset 4px, radio 6px.
- **Enlace secundario (`.link-more`):** el único CTA secundario. Texto `--ink-2` a 600, subrayado de 1px en `--line-strong` con offset 5px, flecha SVG de 16px que baja 2px en hover (200ms `--ease-out`); hover a `--ink` y subrayado `#8FA8FF`; `padding: 4px 0`, `white-space: nowrap`. No existe variante de botón fantasma.

### Chips
- **Chips:** no hay. El `.ejemplo` que marcaba cifras provisionales se retiró al entrar los casos reales; si vuelve a hacer falta marcar algo como provisional, se reconstruye con la píldora punteada en lavanda de nota.

### Cards / Containers
No hay tarjetas. El contenedor del sistema es la **fila con hairlines**: `border-top: 1px solid var(--line)` en cada fila y `border-bottom` en la última (señales) o en cada una (libro, registros), padding vertical 20–22px / 26–36px, sin fondo, sin radio, sin sombra. Cuatro instancias: `.senal`, `.libro-row`, `.log`, `.stop` (esta última sin regla; la ruta SVG hace de eje).

### Navigation
- **Style:** `position: sticky; top: 0`, 60px, scrim de noche con blur 10px y `border-bottom: 1px solid var(--line)`. Logo PNG a 30px de alto a la izquierda.
- **Links:** ocultos en celular; desde 900px `display: flex`, gap 28px, `--ink-2` a .95rem/500, hover a `--ink` en 150ms. Tres enlaces: Servicios, Resultados, Cómo trabajamos. Sin estado activo por sección.
- **Mobile treatment:** solo logo. La acción vive en la **CTA fija** (`.sticky`): barra `position: fixed` abajo con scrim de noche y `env(safe-area-inset-bottom)`, botón a ancho completo, `transform: translate3d(0,110%,0)` en reposo y `.on` cuando el CTA del hero ha salido por arriba y el cierre aún no está al 20% del viewport; transición 260ms `--ease-out`. Oculta desde 900px y en modo captura.

### Estela (`.estela`)
El separador de secciones, tomado del trazo del logo. Bloque de 72px de alto (150px en escritorio) al inicio de cada sección, con margen inferior 8px / 16px. `::before` es la línea: 2px de alto, radio 2px, desde `left: -12px` hasta `right: -6px` (−40px / 0 en escritorio), centrada verticalmente, rotada −1.6° (−1.1°) con origen en el extremo derecho para subir hacia la derecha; fondo `linear-gradient(90deg, rgba(59,107,255,0) 0%, rgba(59,107,255,.55) 45%, #7B3BFF 100%)`, así nace invisible a la izquierda y llega sólida al violeta. `::after` es la cabeza: círculo de 10px en `#C7B4FF` con halo `0 0 0 4px rgba(123,59,255,.28)`, pegado al extremo derecho y desplazado −4px para asentarse sobre la línea. `aria-hidden`, sin contenido. En el cierre (`.orbita-estela`) cruza las dos columnas y en escritorio pisa −40px sobre el contenido.

### Titular del hero (`h1.d-tight` + `.grad`)
"Impulsa tu negocio, escala sin límites." en display tight; la segunda cláusula va en `<span class="grad">` con `background: var(--energy); background-clip: text; color: transparent`. Es la única vez que el texto lleva energía y la única cláusula de la página que no está en tinta. Decisión fijada por el usuario: no se cambia el texto ni el reparto del degradado.

### Abridor de sección (`.cota-head`, `.plan-head`)
Titular `h2.d-wide` y `.lead`, apilados con gap 14px (12 en proceso), `max-width: 62ch`, precedidos por la estela. Sin cota, sin número, sin etiqueta. Ambos elementos llevan `.reveal` (el lead con `--i:1`).

### Regla de altitud (`.alt`)
Instrumento fijo al borde izquierdo (`z-index: 40`, `pointer-events: none`). `.alt-rail` con `border-left: 1px solid var(--line-strong)` y dos `repeating-linear-gradient` como marcas: finas de 7px cada 10px en `--line`, gruesas de 13px cada 50px en `--line-strong`. `.alt-fill` es una barra de 3px en `--energy-v` anclada abajo cuya altura es el porcentaje de scroll total. Al cargar, la regla crece desde abajo (`rail-in` 900ms `--ease-out`, `transform-origin: bottom`). La única lectura es la del altímetro: `.alt-tag` centrado sobre la regla, 42px por encima del cohete, visible mientras el cohete viaja acoplado (`p > .5`), y en escritorio la escala fija `.alt-scale`, cuya marca más cercana a la altitud actual se enciende en `--ink`. Ningún número de la regla aparece en un titular ni en un párrafo.

### Cohete (`.rocket`)
Un solo elemento `position: fixed` (`z-index: 41`) con la pose `hero-45.png`; JS lo posiciona sobre `.rocket-slot` del hero y, con el scroll, lo acopla a la regla. Intro (WAAPI en `rocketImg`, 1650ms, `cubic-bezier(.16,1,.3,1)`): entra desde abajo-izquierda fuera de pantalla (x = −(cx+w), y = 90% del viewport) rotado 6°, frena al 62% y asienta con un ligero rebote a −1° / 0°. Después flota (`hover-float` 5.6s ease-in-out, delay 1.7s, −9px y −2°). Acople: sobre `sy / dock` (dock = max(240px, 85% del alto del hero)) con `easeInOut` cúbico, interpola posición desde el hueco hasta el centro de la regla a la altura del relleno, escala de 1 a 30px de ancho (`MARKER_W`) y rota −40° (`DOCK_ROT`) para poner vertical la pose de 45°. Todo en un `requestAnimationFrame` por scroll junto con regla y ruta.

### Señal (`.senal`)
Fila `auto 1fr` con una barra de energía de 22×2px a la izquierda (alineada con `margin-top: .62em`), frase a 700 y subnota `<em>` en `--ink-3`. Hairline arriba; la última también abajo. La lista cierra con un lead de remate a 52ch y 28px de margen.

### Libro "Hoy → Con Kairo" (`.libro-row`)
Fila de tres celdas: clave (`.libro-k`, `--ink-3`, 500), estado de hoy (`.libro-hoy`, `--ink-3`, tachado) y estado con Kairo (`.libro-alt`, `--ink`, 700, con círculo-tick de energía de 16px). En celular la clave ocupa dos filas a la izquierda (`82px 1fr`); en escritorio tres columnas.

### Ruta de servicios (`.route`, `.stop`)
Lista de seis paradas con `.stop-dot` (círculo con anillo hairline fuerte y centro de energía). Un SVG absoluto dibuja una curva Bézier por los centros de los puntos (`buildRoute()`): trazo punteado de fondo y trazo de energía (`#energyStroke`) que se dibuja por `stroke-dashoffset` según el scroll. El cohete pequeño `.route-rocket` (`lado-derecho.png`, 40px / 72px) recorre la curva con `offset-path` / `offset-distance` y `offset-rotate: auto`, con sombra proyectada. El progreso va de que la ruta entre al 62% del viewport hasta que salga por el mismo punto. En celular los puntos están alineados y la curva serpentea ±9px; en escritorio alterna lados con ±58px.

### Resultado (`.log`)
Ficha por caso (`.caso`): la prueba a la izquierda, en pantalla de celular (`.tels` / `.tel`), y a la derecha el nombre (`h3` wdth 125), qué se hizo (`.caso-que`) y el resultado, sea cifra grande (`.caso-n.num`) o lista de logros (`.caso-lista`). En escritorio los lados alternan por ficha.

### Escalera del proceso (`.steps`, `.step`)
En celular, lista vertical con `border-left: 1px solid var(--line-strong)` y un punto de 11px por etapa (borde `#8FA8FF`; el primero relleno de energía). En escritorio, cuatro columnas con `border-top` y `border-left` en hairline fuerte y `margin-top` decreciente (168/112/56/0) para que los bordes dibujen los peldaños. Cada etapa: título wdth 125 a 800, duración `.step-d.num` en `--ink-3` alineada al final, párrafo en `--ink-2`.

### Cierre (`.orbita`)
Sección con `overflow: hidden`, halo radial de energía desde abajo, la palabra "Hablemos." en display wide, `h2` en wdth 100 a 700, lead, CTA primario con glifo de WhatsApp, nota de dos líneas (`.orbita-note`) y la mascota `celebrando.png` rompiendo el marco (184px con márgenes negativos en celular, `min(420px,100%)` desbordando −60px a la derecha en escritorio). La clase conserva el nombre `orbita` en el código; el contenido no usa la palabra.

### Mascota (`.mascot`, `.rocket-inner`, `.route-rocket`)
Siempre PNG con canal alfa desde `assets/mascot/`, `pointer-events: none`, `user-select: none`, `loading="lazy"` salvo la del hero (preload). Poses usadas y dónde:
- `hero-45.png` (360×486): hero y marcador de la regla; única pose que se mueve.
- `lado-derecho.png` (402×196): cohete pequeño de la ruta, 40px / 72px, rotado por `offset-rotate`.
- `celebrando.png` (220×354): cierre.
Las demás poses de la hoja (frente, espalda, 135/225/315, arriba, lado-izquierdo, feliz, sorprendido, apuntando, descansando, veloz, pensativo, confiado) están recortadas en `assets/mascot/` pero no se usan en este build. Cada aparición acompaña un paso del embudo; no hay mascota decorativa ni mascota "que mira" al lado de una lista.

### Motion grammar
- **Easing:** `--ease-out` `cubic-bezier(.16,1,.3,1)` para todo lo que entra o se acopla; `ease` para color y sombra; `ease-in-out` solo para el flote.
- **Entrada orquestada (hero):** `.rise` 800ms `--ease-out` desde 22px abajo, con delays `r1` 280 (h1) / `r2` 380 (lead) / `r3` 520 (botón) / `r4` 680 (enlace) / `r5` 820ms; solo con `.js` en `<html>`.
- **Revelado por scroll:** `.reveal` a opacidad 0 y 14px abajo; `IntersectionObserver` (threshold .12, rootMargin −6% abajo) añade `.in` una sola vez; transición 620ms `--ease-out` con escalonado `--i × 60ms`.
- **Línea de tiempo de scroll:** un solo `requestAnimationFrame` por evento de scroll actualiza relleno de regla, acople del cohete y ruta. Re-medida en `resize` (debounce 120ms), `fonts.ready` y `load`.
- **Reduced motion:** con `prefers-reduced-motion: reduce` se anulan `rise`, `rail-in` y `hover-float`, los `.reveal` se muestran, la CTA fija no transiciona, `scroll-behavior: auto` y la intro WAAPI no se ejecuta. El acople y la ruta siguen ligados al scroll (no son animaciones autónomas).
- **Modo captura:** `?shot=1` añade `.shot` a `<html>`: sin entradas, sin flote, reveals visibles, CTA fija oculta e intro saltada. `?full=1` añade `.full`: el hero pierde su `min-height` para capturas de página completa.

## Do's and Don'ts

### Do:
- **Do** usar `--energy` (100°) en horizontal y `--energy-v` (violeta arriba, azul abajo) en cualquier relleno vertical, como la regla.
- **Do** abrir cada sección con una `.estela` (72px / 150px) seguida de `h2.d-wide` y `.lead`; la estela es el único separador entre secciones.
- **Do** separar filas con hairlines de 1px (`--line`) y reservar `--line-strong` para ejes: regla, escalera, anillos de punto, ruta, subrayado del enlace.
- **Do** poner `.num` en toda cifra de resultado o duración.
- **Do** dar a todo botón `min-height: 52px`, píldora, `:active` a `scale(.97)` en 160ms `--ease-out` y ancho completo en celular cuando es el CTA de la sección.
- **Do** anclar en celular las acciones del hero al pie de la primera pantalla con la rejilla `auto minmax(0,1fr) auto`.
- **Do** usar la mascota como PNG alfa desde `assets/mascot/`, con `pointer-events: none`, y solo en hero/regla, ruta y cierre.
- **Do** mover cualquier cosa ligada al scroll dentro del mismo `frame()` y respetar `prefers-reduced-motion` anulando las animaciones autónomas.
- **Do** publicar solo cifras verificables en la propia captura o confirmadas por el cliente; si no hay número, el caso va con lista de logros en vez de inventar uno.

### Don't:
- **Don't** usar azul o violeta planos como relleno, fondo o texto; la energía es siempre degradado (excepciones cerradas: `::selection`, el azul de foco `#8FA8FF` y el halo al 28% de la estela).
- **Don't** crear tarjetas, paneles con fondo, bordes de caja ni sombras en superficies de contenido.
- **Don't** separar secciones con `border-top`; eso es para filas y para el pie.
- **Don't** añadir un tercer ancho o un tercer peso de display; wdth 125 a 800/900 para rótulos, wdth 100 para lectura.
- **Don't** poner kickers, cotas, numerales de altitud, etiquetas en mayúsculas ni texto en `uppercase` sobre titulares ni dentro de los párrafos; la altitud solo se lee en la regla.
- **Don't** usar vocabulario de vuelo en el contenido (plan de vuelo, órbita, registros, cota); los títulos dicen lo que la sección hace por el lector.
- **Don't** aplicar `.grad` a ningún texto fuera de la segunda cláusula del `h1`.
- **Don't** dibujar la mascota con CSS/SVG ni usar iconos de glifo decorativos; los únicos SVG son las flechas de CTA, la ruta de servicios y el logo de WhatsApp dentro del botón.
- **Don't** redondear nada que no sea botón, chip, punto, cabeza de estela o barra fina; el resto del sistema es recto.
- **Don't** usar más de un cohete en movimiento por pantalla; el del hero y el de la ruta nunca coinciden en el viewport.

## Revisión del 17 de septiembre de 2026 (pase creativo)

- **Cohete del hero**: ahora sale del fotograma 2,2 s del video (`assets/mascot/hero-rocket@2x.webp`, 1292×910, alfa real, visor relleno). Pose diagonal a 34°; `DOCK_ROT -56` lo pone vertical en la regla; `MARKER_W 44`.
- **Altímetro**: vuelve como detalle del cohete, nunca como titular. `.alt-tag` (11px, tabular) viaja sobre el marcador de la regla y muestra `progreso × 10.000 m`; en escritorio la regla lleva escala fija (`.alt-scale`: 0, 2.500, 5.000, 7.500, 10.000) a la derecha de los ticks.
- **Cielo**: `<canvas class="sky">` fijo detrás de todo; estrellas de 0,5 a 1,6 px, alfa .18 a .68, 30 % azuladas (#9FB4FF), que descienden con el scroll a distinta velocidad (paralaje de ascenso). Se redibuja solo cuando cambia el scroll.
- **Estela**: se dibuja al entrar en pantalla (`clip-path` de derecha a izquierda, 900 ms) y la cabeza aparece 500 ms después.
- **Ruta de servicios**: la parada más cercana al cohete recibe `.lit` (anillo violeta al 22 %, punto a 1,25×); las demás bajan a `--ink-2` / opacidad .72 mientras el cohete viaja.
- **Resultados**: la cifra grande cuenta de 0 a su valor (900 ms, ease-out cúbico) la primera vez que entra al viewport; se omite con `prefers-reduced-motion`.
- **Densidad** (3 → 5): secciones 52/92 px de aire inferior (antes 72/128), estela 58/104 px, cabeceras con 22/36 px bajo el lead, filas de dolores/libro/ruta/bitácora entre 14 y 18 px, escalera de proceso 132/88/44/0.
- **Hero celular**: fila central en columna: lead y luego el cohete a 250 px alineado a la derecha; el CTA sigue anclado abajo.

### Ajustes del mismo día (contenido y hero móvil)

- **Palabras de marca en títulos**: cada `h2` de sección y cada `h3` de servicio lleva una frase clave en `.grad` (degradado azul→violeta con `background-clip:text`), una por título. "Hablemos." va completo en degradado. Las paradas no encendidas de la ruta se atenúan por `opacity:.7`, nunca por color, para no romper el degradado.
- **Servicios (8, en este orden)**: Automatización de procesos · Funnels de venta y diseños web · Soluciones con IA · Marketing digital · Publicidad paga en redes sociales · Edición de videos · Tiendas virtuales · Creación de contenido. El pie repite la misma lista.
- **Dolores**: cuatro, fuertes y generales; sin referencias a la competencia. El puente que cierra la lista es una sola frase, "Nada de esto se arregla solo."
- **Hero móvil**: la fila central usa `justify-content:space-between` con el cohete primero (`order:-1`, `min(330px, 100% + 34px)`, sangrado a la derecha) y el lead pegado al CTA, para que no quede un bloque negro vacío.

## Revisión del 21 de septiembre de 2026 (AIDA)

- **Regla de altitud**: ya no existe en el primer viewport. `.alt` nace con `opacity:0` y recibe `.on` cuando el cohete lleva más del 30 % de su descenso hacia ella (`p > .3`); se apaga si el usuario vuelve arriba (`p < .06`). El `rail-in` (scaleY) se dispara con esa clase.
- **Orden AIDA**: Atención (hero) → Interés (dolores, lo que cambia) → Deseo (resultados como prueba, luego servicios como medio) → Acción (cómo trabajamos como reducción de riesgo, cierre). `Resultados` pasa antes que `Servicios`; la navegación sigue el mismo orden.
- **Puente Atención → Interés**: el enlace secundario del hero baja a `#dolores` ("Mira si esto te está pasando").
- **CTA intermedio** (`.cta-band`) al final de Resultados: frase puente + botón directo a WhatsApp. En celular solo va la frase; el botón lo cubre el CTA fijo.
- **Cierre**: la nota promete respuesta el mismo día hábil.

## Revisión del 21 de septiembre de 2026 (colores del logo y autoridad)

- **Tokens nuevos**: `--silver #E9DFD8`, `--silver-2 #C9BFB8`, `--metal` (degradado plateado vertical, como las letras del logotipo) y `--metal-line` (hairline metálica que se desvanece en los extremos). El azul pasa a `#2B82FF` y el violeta a `#6F2BF5`, más cerca de la estela del logo.
- **Dónde va el plateado**: primera cláusula del titular del hero (`.metal`), números grandes de Resultados (`.log-n b`), números de la franja de autoridad, cabeza de cada estela (punto plateado con halo cian), ticks y borde de la regla de altitud, aros en reposo de la ruta de servicios y de los pasos, línea del pie y borde inferior de la nav. El texto corrido sigue en `--ink`.
- **Navegación**: enlaces en `--silver-2`; el de la sección visible se enciende en `--ink` con subrayado azul→violeta (`IntersectionObserver`, `rootMargin -45%/-50%`); `.nav-trail` dibuja el progreso de la página como estela azul→violeta con cabeza plateada a lo largo del borde inferior (mismo dato que el altímetro). El CTA de la nav lleva un borde interior plateado.
- **Autoridad** (`.cred`): bajo el CTA del hero, cuatro datos: 3 años en negocios digitales, 4 empresas de experiencia, certificados en Meta Ads (ícono propio, sin logotipo de Meta), equipo completo. 2×2 en todos los anchos; entra con `.rise.r5`.
- **Equipo** en la copia: cierre ("con el equipo"), nota del cierre, lead de Resultados ("tres años"), pie.
- **WhatsApp**: `wa.me/573053128087` con texto prellenado corto. El saludo automático se configura en WhatsApp Business (ver README).

## Revisión del 22 de septiembre de 2026 (ritmo de color y orden de secciones)

- **Los secundarios de la marca son blanco, azul y violeta.** El acabado metálico se enfría: `--silver #FFFFFF`, `--silver-2 #C7CFEE`, `--metal` de blanco a `#B4C1E8` y `--metal-line` con azul `#8FA8FF` en los extremos. Todos los `rgba(233,223,216,…)` (champán) pasan a `rgba(226,233,255,…)`. El plateado sigue donde estaba; ahora lee como blanco frío y no como champán.
- **Ritmo, no monotonía.** El negro sigue siendo el suelo, pero las secciones se encienden (ver la nota de salas más abajo):
  - **Servicios es una sala violeta**: `#servicios::before` ocupa `100vw`, mezcla un radial violeta arriba a la izquierda con uno azul abajo a la derecha sobre una base `rgba(14,12,38,.86)`, y se recorta con `mask-image` (transparente → opaco al 13 % → transparente al 87 %) para entrar y salir sin bordes duros. Dentro, la ruta punteada sube a `rgba(196,206,255,.34)`, los aros se oscurecen para recortar contra la nebulosa y el halo encendido crece a 6 px.
  - **Resultados pasa a fichas**: cada `.log` es una tarjeta con borde `rgba(143,168,255,.20)`, fondo azulado muy bajo y un filo de 3 px con `--energy` arriba. El `.cta-band` que cierra la sección es un panel con degradado azul→violeta al 20 %.
  - **Lo que cambia**: la columna del "después" lleva un lavado azul→violeta horizontal y una barra de 2 px con `--energy-v` a la izquierda; la del "hoy" sigue tachada en gris.
  - **Cierre**: el radial del horizonte sube a `.34` de azul con violeta al 46 %.
- **Orden**: Servicios va **antes** que Resultados (deseo → prueba). La navegación y el `order` del scroll-spy siguen el mismo orden: Servicios · Resultados · Cómo trabajamos.
- **Fuera el enlace secundario del hero** ("Mira si esto te está pasando") y su estilo `.link-more`. El hero queda con un solo camino: el CTA, y debajo la franja de autoridad.

## Revisión del 22 de septiembre de 2026 (salas: cada sección con su propia luz)

El tratamiento que se probó en Servicios se extendió a toda la página con un molde único, `.sala`:

```css
.sala{isolation:isolate}
.sala::before{content:""; position:absolute; inset:0; z-index:-1; background:var(--sala);
  mask-image:linear-gradient(180deg, transparent 0, #000 13%, #000 87%, transparent 100%)}
```

Cada sección solo declara su `--sala`; la máscara hace que toda luz entre y salga sin bordes duros, así que las salas se encadenan como una subida y no como bloques pegados. La intensidad es la dramaturgia:

| Sección | Luz | Pico |
| --- | --- | --- |
| Hero | bruma violeta detrás del cohete, azul bajo en la esquina inferior izquierda | .26 |
| Dolores | la sala más fría y oscura: azul por el borde izquierdo, violeta muy bajo a la derecha | .17 |
| Lo que cambia | amanece por abajo a la derecha en azul, violeta en la esquina superior izquierda | .30 |
| Servicios | nebulosa violeta arriba-izquierda + azul abajo-derecha sobre base `rgba(14,12,38,.86)` | .40 |
| Resultados | sala de datos: azul desde arriba a la derecha, violeta abajo a la izquierda | .28 |
| Cómo trabajamos | luz en diagonal a 26°, como la escalera de etapas, y azul en la esquina del último peldaño | .24 |
| Cierre | horizonte: azul al centro del borde inferior y dos violetas a los lados (`#contacto::before`, `inset:auto -20% -14% -20%`) | .42 |

Reglas para no romperlo:

- Ninguna luz supera `.42` de alfa y ninguna cubre el centro del texto; el titular del hero debe seguir siendo lo más blanco de la pantalla.
- `inset:0` en lugar de `100vw`: las secciones ya son de ancho completo y así no se suma el ancho de la barra de scroll.
- Toques de color a nivel de componente: filas de dolores con divisiones `rgba(143,168,255,.22)`, peldaños del proceso con un lavado superior `rgba(143,168,255,.09)` en escritorio, y el pie abre con una hairline `--energy` al 40 %.

## Revisión del 2 de octubre de 2026 (luz que viaja, aire comprimido y assets 2×)

Tres encargos: más creatividad visual, recuperar los números laterales del cohete sin meterlos en los párrafos, apretar el aire entre bloques y subir la calidad de render de las imágenes.

**Luz que viaja.** La energía de la marca deja de ser un relleno estático y se mueve, sin añadir un solo color nuevo.

- **Barrido (`.sheen`)**: una banda blanca al 72 % cruza el texto con `background-clip: text`, montada como primera capa sobre el degradado base (`--sheen-base`: `--energy` en `.grad`, `--metal` en `.metal`). `background-size: 230% 100%`, de `-70%` a `170%`, ciclo de 7 s con `--ease-out`. Solo tres piezas lo llevan: las dos cláusulas del `h1` (desfasadas 1,5 s y 2,1 s para que la luz cruce la frase en diagonal) y "Hablemos." del cierre. Las cifras de Resultados llevan el mismo montaje pero con la banda parada fuera de cuadro; se dispara una sola vez (1,4 s) con la clase `.counting` mientras el número cuenta.
- **Estelas con líneas de velocidad**: cada `.estela` suma dos `<i>` paralelos al trazo principal (1px, lavanda al 34–62 %, desplazados ±7px en celular y ±9px en escritorio), que se dibujan con el mismo `clip-path` escalonado 110 ms y 190 ms después del trazo. La subida gana intensidad sección a sección: el trazo principal va de `.84` en "lo que cambia" a `1` en proceso y cierre.
- **Marca de dolores que se traza**: el guion `--energy` de cada señal entra con `scaleX(0 → 1)` desde la izquierda, 620 ms, encadenado al `--i` de su fila.
- **Tachado que se dibuja**: en el libro Hoy → Con Kairo el `text-decoration-color` del "hoy" va de transparente a su gris en 700 ms. Se anima el color, no una pseudo-línea, para que siga funcionando cuando el texto hace dos líneas.

Todo lo anterior se apaga con `prefers-reduced-motion` y en `?shot=1`.

**Altímetro recuperado.** Los números laterales vuelven a leerse durante toda la subida, y en ningún párrafo:

- `.alt-tag` ahora aparece desde `p > .5` (antes `p > .92`, es decir casi nunca) y se mantiene hasta que el cohete se desacopla hacia el cierre. Va centrado sobre la regla, 42 px por encima del marcador, con `text-shadow` sobre el fondo para separarlo del cielo.
- La escala fija de escritorio reacciona: la marca más cercana a la altitud actual recibe `.near` y sube a `--ink` al 100 %. Las otras cuatro se quedan en `--silver-2` al 80 %.

**Aire comprimido.** Se recortó el espacio vertical entre bloques entre un 25 % y un 35 %, sin tocar el tamaño de la tipografía ni las rejillas:

| | antes | ahora |
|---|---|---|
| `.estela` (celular / escritorio) | 58 / 104 px | 40 / 68 px |
| `.cota`, `.plan` padding inferior | 52 / 92 px | 38 / 62 px |
| `.cota-head`, `.plan-head` margen inferior | 22 / 36–40 px | 15 / 24–26 px |
| `.senal` padding | 15 / 18 px | 12 / 14 px |
| `.libro-row` padding | 14 / 18 px | 11 / 14 px |
| `.stop` padding | 16 / 24 px | 13 / 19 px |
| `.log` padding | 16–18 / 22–24 px | 13–15 / 17–19 px |
| escalera del proceso (`margin-top`) | 132 / 88 / 44 / 0 | 108 / 72 / 36 / 0 |
| `.orbita` padding inferior | 72 / 110 px | 54 / 78 px |

**Calidad de imagen.** El video de origen (1920×1080) no da un cohete más grande que el PNG que ya existía: el recorte estaba hecho del fotograma de mayor tamaño, así que no hay píxeles nuevos que recuperar. La mejora viene del pipeline:

- Todas las mascotas pasan a **WebP a 2×** (escalado bicubic, calidad 95). Bicubic y no lanczos porque el lanczos mete ringing en los bordes del casco y la llama. El peso se mantiene o baja: el cohete del hero va de 121 KB en PNG a 84 KB en WebP con cuatro veces los píxeles. El logo pasa a WebP **sin pérdida**: 200 KB → 129 KB, mismos píxeles.
- Los PNG siguen en el repo como fuente; el HTML ya no los referencia.
- `will-change: transform` sale de `.rocket-inner` y queda solo en `.rocket`. Anidar dos capas compuestas obligaba a rasterizar dos veces y el cohete perdía nitidez justo cuando se encoge hacia la regla.
- El `preload` del cohete apunta al WebP con `fetchpriority="high"`, y la etiqueta lleva `decoding="sync"` para que no parpadee en la entrada.

Reglas para no romperlo:

- `.sheen` no se reparte: tres piezas de texto y las cifras de Resultados. Es un acento de jerarquía, no un efecto de superficie.
- Cualquier mascota nueva entra como WebP a 2× de su tamaño de render, nunca por debajo; si se escala con `transform`, una sola capa compuesta.
- Los metros del altímetro no salen de la regla. Si un número de altitud aparece en un titular, un párrafo o una ficha, está mal.

## Revisión del 13 de octubre de 2026 (casos reales en pantalla de celular)

Resultados deja de mostrar cifras de ejemplo y pasa a mostrar trabajo real, en el soporte donde de verdad se usa: la pantalla de un celular.

**La ficha de caso (`.caso`).** Sustituye a `.log`. Es la misma ficha de la sala de datos (radio 16px, borde `rgba(143,168,255,.20)`, filo superior de 3px en `--energy`), pero ahora con dos columnas: la prueba y el texto. En escritorio los lados alternan ficha a ficha. La columna de los celulares es siempre la `auto` y la del texto la flexible; al alternar hay que invertir la plantilla de columnas, no solo mover las celdas de celda — hacerlo mal deja la baraja en la columna flexible y el celular se sale de la ficha entre 900 y 1150px.

**El celular (`.tel`).** Marco metálico de 4px con el mismo degradado frío del logo, radio 21px fuera y 17px en la pantalla, sombra baja y un reflejo diagonal al 17% sobre el vidrio. Dentro va la captura tal cual, sin retocar. El ancho es fluido en escritorio (`clamp(132px, 13vw, 188px)`, y `clamp(168px, 15vw, 214px)` cuando va sola) para que la baraja nunca empuje fuera de la ficha.

**Cómo se agrupan (`.tels`).** Una sola captura va en `.tels-1`. Tres van en `.tels-3`: en celular es una fila con scroll horizontal y `scroll-snap` al centro, para pasarlas con el pulgar; en escritorio se montan como una baraja (solape del 24% del ancho, la del medio al frente) con rotaciones de −4°, 0° y +4°. El `padding-block` de 9px existe para que las esquinas giradas no se recorten contra el contenedor que hace scroll.

**Movimiento.** Cada celular entra girando desde una inclinación 3,2 veces mayor que la de reposo, con escala .96 y 24px de desplazamiento, escalonado 90ms por posición. Ya revelado, flota despacio (6px, 6,8s) con la misma técnica que el cohete, pero por la propiedad `translate` en vez de `transform`, para no pisar la rotación de reposo. Todo se apaga con `prefers-reduced-motion` y en `?shot=1`.

**El contador de cifras** ahora entiende separador de miles: limpia los puntos para contar y vuelve a formatear con `fmt` en cada cuadro, así "9.794" cuenta hasta 9.794 en vez de hasta 9.

**Honestidad de las pruebas.** Una captura que se presenta como resultado de un cliente no se retoca nunca, ni "sutilmente". Si el dato de partida no está en una captura, va escrito como texto y confirmado por el cliente, no fabricado dentro de la imagen. Un caso sin número confirmado se publica con lista de logros (`.caso-lista`), no con una cifra inventada.

Reglas para no romperlo:

- Las capturas entran en WebP dentro de `/assets/casos/`, al tamaño nativo del pantallazo; si el original es de un iPhone a resolución completa, mejor, porque el marco las muestra a ~190px y agradece la densidad.
- Las dos fichas comentadas al final de la sección son el molde para las empresas 3 y 4: se descomentan y se rellenan, no se reinventan.
- `.tel` no lleva `overflow:hidden` en la ficha que lo contiene: las esquinas giradas y el flotado necesitan salirse un poco.

## Revisión del 13 de octubre de 2026 (formulario como CTA, capturas legibles)

**El CTA deja de ser la llamada y pasa a ser el formulario.** Todos los botones de la página (`[data-cta]`: nav, hero, banda de resultados y CTA fija de celular) dicen ahora "Cuéntanos de tu negocio" y llevan a `#contacto`. La llamada no desaparece: se agenda al final del formulario, cuando ya sabemos de qué se va a hablar. Se retiró el bloque de JavaScript que reescribía esos botones hacia WhatsApp; el único salto a WhatsApp es el envío del formulario.

**El formulario (`.form`).** Once campos en una rejilla de dos columnas en escritorio y una en celular, con `.campo.ancho` para los que ocupan todo: nombre, empresa, a qué se dedica, web o Instagram, tamaño del equipo, qué le interesa (casillas), dolor principal, cuánto puede invertir al mes, cuándo quiere empezar, WhatsApp y correo. Seis son obligatorios. Los controles usan superficie `rgba(10,13,32,.72)`, borde hairline azulado y foco en `#8FA8FF` con halo de energía; la flecha del `select` se dibuja con un pseudo-elemento para no depender del control nativo. Las casillas de servicio son `.chip`: píldoras que al marcarse se llenan con el degradado de la marca. El `input` real queda transparente sobre la píldora, así que el objetivo táctil es toda la ficha.

**Qué pasa al enviar.** El sitio es estático y no tiene servidor: las respuestas **no se guardan en ninguna parte**. Se validan en el navegador, se arman como texto y se abren en WhatsApp con todo escrito. Si el navegador bloquea la ventana nueva, queda visible un enlace (`.form-ok`) para abrirla a mano, porque dentro de un visor de artefactos `window.open` puede devolver null. Para que las respuestas queden registradas haría falta un servicio de formularios o una función serverless; hoy no los hay.

**Capturas legibles.** Las pantallas de los casos crecen (`--tel-w` de 240px en celular y hasta 284px en escritorio para una sola; 200px y hasta 224px para las de la baraja) y los assets pasan a 2x con `lanczos`, que para capturas con texto va mejor que `bicubic`. Se retiró el reflejo diagonal que iba sobre el vidrio (`.tel::after`): lavaba la imagen y hacía ver las capturas como semitransparentes. El marco metálico es ahora lo único que decora.

**Redacción de la captura de la pantalla de inicio.** La foto del teléfono mostraba todas las apps personales del dueño. Se publica difuminada (`boxblur`, saturación al 45%) salvo los dos iconos de El Tradicional, que van nítidos y un 27% más grandes. Es redacción por privacidad, no manipulación de la prueba: no se cambia ningún dato, solo se oculta lo que no viene al caso.

**La cifra de partida de CREO** (4.673 seguidores) va escrita en el texto del resultado, confirmada por el cliente, y no dentro de una captura fabricada. La regla sigue en pie: una captura que se presenta como prueba de un cliente no se retoca nunca.

Reglas para no romperlo:

- Ningún `[data-cta]` vuelve a apuntar a WhatsApp. El salto a WhatsApp es solo el envío del formulario.
- Si algún día hay backend, el formulario debe seguir funcionando sin él: la ruta de WhatsApp es el plan de respaldo, no un apaño temporal.
- Las capturas de caso se publican a 2x y sin reflejo encima. Si una trae datos personales que no son del caso, se difumina antes de publicarla.

## Revisión del 13 de octubre de 2026 (formulario aparte, antes y después, tercer caso)

**El formulario sale de la landing.** Vivía incrustado en el cierre y recargaba la página. Ahora es `formulario.html`, una página propia que se sirve en `/formulario` y que todos los CTA abren en otra pestaña. La landing recupera su cierre corto: palabra, frase, botón y nota.

La página del formulario no hereda la hoja de estilos de la landing: lleva la suya, con los mismos tokens pero sin cohete, sin regla, sin estelas ni cielo. Solo necesita cabecera, formulario y pie, y así carga ligera. Tiene `noindex` porque no es una página para buscarse, sino para llegar desde la landing, y abre con tres pasos numerados (responde / agendamos / sales con acciones) para que se vea dónde termina esto.

**Antes y después (`.tels-2`).** Variante nueva de la baraja: dos capturas en paralelo con `figcaption` ("Antes", "Hoy", la segunda en `--ink` para marcar cuál es la de ahora). A diferencia de `.tels-3`, esta **no hace scroll**: una comparación que obliga a deslizar no es comparación, así que los celulares se encogen con la ventana (`clamp(112px, 31vw, 150px)` en celular) y las dos caben siempre, hasta en 320px.

**La cifra de CREO** pasa a ser el salto: `+5.121`, con los dos extremos en la línea de apoyo ("de 4.673 a 9.794"). Los dos números están en las dos capturas, así que todo el dato es verificable mirando la ficha.

**Tercer caso: Tic Tac Shop.** Relojería artesanal, digitalizada con tienda virtual. Tres pantallas en baraja (portada, catálogo, ficha de producto) y los logros en lista.

**Capturas.** Las de CREO y Tic Tac ya vienen de originales de iPhone a 3x y se publican a 640px de ancho, que es más del doble del tamaño de render más grande. Las de El Tradicional siguen siendo las comprimidas del chat.

Reglas para no romperlo:

- El formulario vive en `formulario.html`. Si cambia un campo, cambia ahí; la landing ya no tiene copia.
- `.tels-2` nunca lleva scroll: si no caben las dos capturas, se encogen.
- Las capturas de caso se publican a 640px de ancho. Con original de iPhone, se baja a 640; sin él, se sube a 2x y se anota que falta el original.

## Revisión del 14 de octubre de 2026 (el cohete manda, capturas sólidas, secciones más amplias)

**El cohete del hero nunca había crecido en escritorio.** La regla de celular `.hero-row .rocket-slot` (0,2,0) le ganaba por especificidad a la de escritorio `.rocket-slot` (0,1,0), y como en escritorio `.hero-row` es `display:contents` —desaparece del layout pero sigue en el DOM— el selector seguía casando. El cohete medía 330px en todas las resoluciones. Ahora la regla de escritorio usa el mismo selector y el ancho sale de la columna más el aire que sobra: `--bleed: max(0px, (100vw − var(--maxw)) / 2) + 20px`. A 1440px pasa de 330 a 667px, y a 1920 llega a 907, sin recortarse ni invadir el titular.

**Las capturas parecían transparentes y no era opacidad.** Casi todas son de modo oscuro, y sobre una página casi negra la pantalla se fundía con el fondo: el marco de 4px en `rgba` no alcanzaba a separarlas. La solución no fue tocar la imagen sino el objeto: marco de 6px en color sólido, un filo oscuro de 1px entre marco y pantalla (`box-shadow` en la `img`) y una sombra más honda que lo despega de la página. Nada se superpone a la captura.

**La baraja de tres en celular ya no hace scroll.** Mostraba una pantalla y media y la mayoría nunca desliza, así que dos tercios del caso no se veían. Ahora es abanico también en celular: `--w: clamp(112px, 32vw, 230px)` con solape de `−.46 × --w`, de modo que el conjunto mide 2,08 anchos y entra desde 320px. El `clamp` acota por arriba a propósito: con porcentajes del contenedor, entre 760 y 900px los celulares crecían tanto que se salían de la ficha.

**Lo que cambia** pasa de cuatro filas a ocho, una por frente de servicio, porque cuatro no mostraban de lo que son capaces. **Cómo trabajamos** mantiene la escalera de cuatro etapas pero cada una suma tres viñetas (`.step-lista`) con lo que se entrega.

**El titular del hero va centrado en celular** y a la izquierda en escritorio. La franja de autoridad dice 15 empresas acompañadas.

Reglas para no romperlo:

- En escritorio, cualquier regla sobre `.rocket-slot` tiene que escribirse `.hero-row .rocket-slot` o la pierde contra la de celular.
- Ninguna fila de capturas lleva scroll horizontal. Si no caben, se encogen.
- El marco del celular va en color sólido. Nada translúcido encima de una captura.

## Revisión del 15 de octubre de 2026 (el CTA que no abría, y la capacidad que no se leía)

**El botón "Cuéntanos de tu negocio" no llevaba a ninguna parte.** Los seis CTA apuntaban a `/formulario` con `target="_blank"`. La ruta absoluta solo existe en Vercel (la resuelve `cleanUrls`), así que fuera de ahí —vista previa, copia local, cualquier otro host— caía en la raíz del dominio equivocado; y el `target="_blank"` lo bloquean los iframes con `sandbox` y los navegadores embebidos de Instagram y WhatsApp, que es por donde llega casi todo el tráfico. Ahora los seis apuntan a `formulario.html`, relativo y en la misma pestaña. Relativo funciona en los cuatro contextos sin excepción; la misma pestaña elimina de raíz el bloqueo de ventanas emergentes. El formulario sigue siendo una página aparte, que era lo que se pedía: página aparte no quiere decir pestaña aparte. La vuelta a la landing está en el logo y en el enlace "Volver" de la cabecera.

**La página no decía que podemos hacer casi cualquier cosa.** Leída de corrido se entendía un catálogo de ocho casillas: si lo tuyo no está en la lista, no es para ti. Cuatro cambios lo corrigen sin inflar la página:

- **Ficha `.abierto`**, al cierre de Servicios: lo único con borde y fondo propio en toda la página, para que corte la lectura en lista. Dice que los ocho son los frentes que más piden, no el límite, y explica cómo se trabaja un caso que no encaja: lo cuentas en tus palabras → lo cruzamos con lo construido → sale propuesta con alcance, tiempo y precio. También dice que si no es lo nuestro, lo decimos. Sin esa frase la promesa no es creíble.
- **Dos señales más** en Dolores (seis, no cuatro): la información repartida en cuadernos y chats, y tener claro el problema pero no a quién encargárselo. La segunda es la que conecta con la ficha: cada proveedor vende su pedazo y ninguno responde por el resto.
- **Cierres de sección** que abren la puerta: "tu caso no tiene que estar en esta lista" en Dolores, "la fila que falta la pone tu negocio" en Lo que cambia.
- **Señales 3 y 4 reescritas.** "Tu página web se ve de hace tres años. Porque es de hace tres años." era un juego de palabras que había que releer; "Inviertes en publicidad y no sabes qué volvió" dejaba el sujeto en el aire. Ahora nombran al responsable y la consecuencia.

**Cómo trabajamos pasa a cinco etapas.** La primera es el formulario ("Nos cuentas tu caso", 2 min), que antes estaba en todos los CTA pero en ninguna etapa: el proceso arrancaba en la llamada y contradecía al botón. Con cinco columnas la escalera horizontal pide más ancho, así que su punto de quiebre sube de 900 a 1080px; entre 900 y 1080 se queda el riel vertical, que con cinco etapas sigue leyéndose. El JS que enciende los peldaños usa el mismo 1080.

**Nueve empresas acompañadas**, no quince (dato corregido por el cliente).

**Arreglos de 320px** encontrados al barrer anchos: el rótulo del botón no parte línea, así que su `min-content` estiraba la columna del hero fuera del margen (padding y cuerpo menores por debajo de 360px); la baraja de tres y el antes/después pedían más ancho del disponible; y el cohete del hero se salía por el margen negativo.

Reglas para no romperlo:

- Los enlaces entre `index.html` y `formulario.html` van **relativos y sin `target`**. Una ruta que empiece por `/` solo funciona en Vercel.
- Cualquier servicio nuevo entra en la ruta de ocho paradas, pero la ficha `.abierto` se queda: es la que dice que la lista no es la frontera.
- La escalera horizontal es de cinco columnas desde 1080px. Si se agrega una etapa, hay que subir ese punto de quiebre y el `innerWidth >= 1080` del JS a la vez.
