# Contact

Sección de **contacto** con información directa y formulario.

## Responsabilidad

- Mostrar título, descripción, teléfono y email de contacto.
- Renderizar el componente `ContactForm` para envío de mensajes.
- Centralizar el email desde `@/config/contact`.

## Archivos

| Archivo | Descripción |
|---|---|
| `Contact.tsx` | Layout de dos columnas: info + formulario. |
| `Contact.module.css` | Estilos del fondo degradado y tipografía. |
| `Contact.test.tsx` | Pruebas de datos de contacto y presencia del formulario. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/components/ContactForm`
- `@/config/contact` — `CONTACT_EMAIL`
- `@/i18n/I18nProvider`

## Traducciones (`dictionaries.ts`)

- `contact.title`
- `contact.description`
- `contact.phoneLabel`
- `contact.emailLabel`

## Datos fijos

- Teléfono: `0963169401`
- Email: valor de `CONTACT_EMAIL` en `src/config/contact.ts`

## Ancla de navegación

`#contacto` — enlazada desde Header y Hero.
