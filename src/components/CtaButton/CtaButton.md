# CtaButton

Botón reutilizable de **llamada a la acción** (CTA).

## Responsabilidad

- Renderizar un enlace (`<a>`) o botón (`<button>`) con estilo CTA consistente.
- Soportar estado `disabled` para formularios en envío.

## Archivos

| Archivo | Descripción |
|---|---|
| `CtaButton.tsx` | Lógica de render condicional (link vs button). |
| `CtaButton.module.css` | Gradiente cyan, hover y estado disabled. |
| `CtaButton.test.tsx` | Pruebas de href, type y disabled. |
| `index.ts` | Reexport del componente. |

## Props

| Prop | Tipo | Descripción |
|---|---|---|
| `href` | `string?` | Si existe, renderiza `<a>`. |
| `type` | `"button" \| "submit"?` | Tipo del botón (default: `"button"`). |
| `disabled` | `boolean?` | Deshabilita el botón. |
| `children` | `ReactNode` | Contenido del CTA. |

## Usado en

- `Hero` — enlace a `#contacto`
- `ContactForm` — botón de envío
