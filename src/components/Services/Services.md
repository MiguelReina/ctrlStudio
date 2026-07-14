# Services

Sección **Nuestros Servicios**.

## Responsabilidad

- Mostrar grid de 3 servicios: Desarrollo Web, Apps Móviles y Soluciones a Medida.
- Cada tarjeta incluye icono emoji, título y descripción.
- Animación de entrada `slideInUp` escalonada.

## Archivos

| Archivo | Descripción |
|---|---|
| `Services.tsx` | Grid de tarjetas de servicio. |
| `Services.module.css` | Cards con borde superior cyan y hover elevado. |
| `Services.test.tsx` | Pruebas de contenido y ancla `#servicios`. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/i18n/I18nProvider`

## Traducciones (`dictionaries.ts`)

- `services.titlePrefix`, `services.titleHighlight`
- `services.items[]` — `icon`, `title`, `description`

## Ancla de navegación

`#servicios` — enlazada desde el Header.
