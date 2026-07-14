# Footer

Pie de página del sitio.

## Responsabilidad

- Mostrar copyright con año dinámico.
- Mostrar tagline de la marca.

## Archivos

| Archivo | Descripción |
|---|---|
| `Footer.tsx` | Render del pie de página. |
| `helpers.ts` | Función `getCopyright()` para formatear el texto legal. |
| `Footer.module.css` | Fondo oscuro y borde superior cyan. |
| `Footer.test.tsx` | Pruebas de copyright y tagline. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/i18n/I18nProvider`

## Traducciones (`dictionaries.ts`)

- `footer.rights`
- `footer.tagline`

## Helper

```ts
getCopyright(year, rights) → "© 2026 CTRL Studio. Todos los derechos reservados."
```
