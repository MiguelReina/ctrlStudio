# About

Sección **¿Por qué elegir CTRL Studio?** de la landing.

## Responsabilidad

- Presentar la propuesta de valor del estudio.
- Listar ventajas competitivas en una lista con checkmarks.
- Mostrar el logo en variante visual con tagline.

## Archivos

| Archivo | Descripción |
|---|---|
| `About.tsx` | Componente principal de la sección. |
| `About.module.css` | Layout en dos columnas (texto + visual). |
| `About.test.tsx` | Pruebas de renderizado y ancla `#nosotros`. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/components/Logo` — variante `about`
- `@/i18n/I18nProvider` — textos traducidos

## Traducciones (`dictionaries.ts`)

- `about.title`
- `about.description`
- `about.features[]`
- `about.visualTagline`

## Ancla de navegación

`#nosotros` — enlazada desde el Header.
