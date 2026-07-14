# Logo

SVG de marca **CTRL Studio**.

## Responsabilidad

- Renderizar el logotipo como SVG inline (sin dependencia de archivos externos).
- Soportar dos variantes visuales según el contexto.

## Archivos

| Archivo | Descripción |
|---|---|
| `Logo.tsx` | SVG con variantes `header` y `about`. |
| `Logo.test.tsx` | Pruebas de renderizado por variante. |
| `index.ts` | Reexport del componente. |

## Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `className` | `string?` | — | Clase CSS para dimensionar el SVG. |
| `variant` | `"header" \| "about"?` | `"header"` | Estilo visual del logo. |

## Variantes

| Variante | Uso | Estilo |
|---|---|---|
| `header` | Header | Fondo negro, flecha cyan |
| `about` | Sección About | Fondo semitransparente, borde cyan |

## Usado en

- `Header` — variante `header`
- `About` — variante `about`
