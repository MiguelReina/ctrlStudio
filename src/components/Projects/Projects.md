# Projects

Sección **Proyectos Creados** — portafolio de trabajos.

## Responsabilidad

- Mostrar tarjetas de proyectos con logo, descripción y enlace externo.
- Activar slider automático (flechas + dots) cuando hay más de un proyecto.
- Resolver rutas de logos con `withBasePath()` para GitHub Pages.

## Archivos

| Archivo | Descripción |
|---|---|
| `Projects.tsx` | Slider, `ProjectCard` y lógica de navegación. |
| `Projects.module.css` | Cards compactas, controles del slider y estilos del logo. |
| `Projects.test.tsx` | Pruebas de links externos, ancla y controles del slider. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/data/projects` — datos estáticos (id, url, logo)
- `@/i18n/I18nProvider` — textos por proyecto
- `@/lib/basePath` — prefijo `/ctrlStudio` en producción

## Traducciones (`dictionaries.ts`)

- `projects.titlePrefix`, `projects.titleHighlight`
- `projects.visitSite`
- `projects.previous`, `projects.next`, `projects.listLabel`
- `projects.items[]` — `id`, `name`, `description`

## Agregar un proyecto

1. Logo en `public/projects/`
2. Entrada en `src/data/projects.ts`
3. Textos en `src/i18n/dictionaries.ts` (ES y EN)

## Ancla de navegación

`#proyectos` — enlazada desde el Header.

## Comportamiento del slider

| Proyectos | Comportamiento |
|---|---|
| 1 | Card centrada, sin controles |
| 2+ | Flechas ‹ › y puntos indicadores |
