# ContactForm

Formulario de contacto con envío por **EmailJS**.

## Responsabilidad

- Capturar nombre, email y mensaje del usuario.
- Enviar el mensaje a `miguel_rg_esteban@hotmail.com` vía EmailJS.
- Mostrar estados de carga, éxito y error.
- Filtrar envíos de bots con campo honeypot.

## Archivos

| Archivo | Descripción |
|---|---|
| `ContactForm.tsx` | UI del formulario y manejo del submit. |
| `helpers.ts` | Lectura de datos, validación EmailJS y envío. |
| `ContactForm.module.css` | Estilos de inputs, labels y honeypot oculto. |
| `ContactForm.test.tsx` | Pruebas de envío, error y honeypot. |
| `helpers.test.ts` | Pruebas de helpers y parámetros EmailJS. |
| `index.ts` | Reexport del componente. |

## Flujo de envío

```
submit → isHoneypotSubmission() → readContactFormData()
       → assertEmailJsConfig() → buildEmailJsTemplateParams()
       → emailjs.send()
```

## Dependencias

- `@/components/CtaButton` — botón de envío
- `@/config/contact` — credenciales y parámetros EmailJS
- `@emailjs/browser`

## Traducciones (`dictionaries.ts`)

- `form.nameLabel`, `form.namePlaceholder`
- `form.emailLabel`, `form.emailPlaceholder`
- `form.messageLabel`, `form.messagePlaceholder`
- `form.submit`, `form.submitting`
- `form.confirmation`, `form.error`

## Seguridad

- Campo honeypot oculto: `company`
- Rate limit: 10 segundos entre envíos (EmailJS `limitRate`)
- Solo Public Key en cliente — nunca Private Key

## Configuración externa

Ver `src/config/contact.ts` y `.env.example`.
