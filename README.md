# VSL2 Landing (Next.js)

Landing page modular para 911 Medical Marketing.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript estricto
- Tailwind CSS v4
- shadcn/ui
- GSAP + ScrollTrigger

## Estructura

- `app`: layout, page, estilos globales.
- `components/marketing`: secciones y layout de la landing.
- `components/ui`: componentes base de shadcn/ui.
- `lib/content`: contenido tipado de la landing.
- `lib/animations`: orquestador y features de animacion.
- `hooks`: hooks reutilizables de UI/animacion.
- `types`: contratos de dominio.

## Scripts

- `npm run dev`: desarrollo.
- `npm run lint`: eslint.
- `npm run build`: build de produccion.
- `npm run start`: servir build.

## Notas

- Se usa alias absoluto `@/*`.
- El favicon se sirve desde `public/favicon.svg`.
- Todas las animaciones de landing se centralizan en `lib/animations`.
