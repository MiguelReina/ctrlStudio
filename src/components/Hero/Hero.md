# Hero

Sección principal de bienvenida (above the fold).

## Responsabilidad

- Presentar el nombre de la marca: **CTRL STUDIO**.
- Mostrar tagline y subtítulo traducidos.
- Incluir CTA principal hacia la sección de contacto.

## Archivos

| Archivo | Descripción |
|---|---|
| `Hero.tsx` | Contenido del hero y botón CTA. |
| `Hero.module.css` | Fondo degradado, animación flotante y tipografía. |
| `Hero.test.tsx` | Pruebas de textos y enlace CTA. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/components/CtaButton`
- `@/i18n/I18nProvider`

## Traducciones (`dictionaries.ts`)

- `hero.tagline`
- `hero.subtitle`
- `hero.cta`

## CTA

Enlaza a `#contacto` mediante `CtaButton`.
