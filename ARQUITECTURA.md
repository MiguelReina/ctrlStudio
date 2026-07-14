# CTRL Studio — Registro de arquitectura

Documentación de referencia sobre la función de cada componente y archivo relevante del proyecto.

## Resumen

Landing page estática de **CTRL Studio** construida con **Next.js 16**, **React 19** y **TypeScript**. Se despliega en **GitHub Pages** bajo `/ctrlStudio` e incluye soporte de **i18n** (ES/EN), **tema claro/oscuro** y formulario de contacto con **EmailJS**.

---

## Estructura general

```
ctrlStudio/
├── .github/workflows/     # CI/CD y deploy
├── public/                # Assets estáticos
├── src/
│   ├── app/               # Rutas y layout de Next.js
│   ├── components/        # UI por secciones
│   ├── config/            # Configuración de contacto / EmailJS
│   ├── data/              # Datos de proyectos del portafolio
│   ├── i18n/              # Traducciones e idioma
│   ├── lib/               # Utilidades compartidas
│   ├── theme/             # Tema claro/oscuro
│   └── test/              # Helpers de pruebas
├── next.config.ts         # Configuración de Next.js
├── vitest.config.mts      # Configuración de tests
└── .env.example           # Variables de entorno de referencia
```

---

## `src/app/` — Aplicación Next.js

| Archivo | Función |
|---|---|
| `layout.tsx` | Layout raíz: metadata SEO, `ThemeProvider`, `I18nProvider` y script anti-flash para el tema oscuro. |
| `page.tsx` | Página principal. Compone todas las secciones en orden: Header → Hero → Services → About → Projects → Contact → Footer. |
| `globals.css` | Estilos globales, variables CSS de marca, tema claro/oscuro y utilidades compartidas (`.container`, `.section-title`). |
| `favicon.ico` | Icono del sitio. |

---

## `src/components/` — Componentes de UI

Cada carpeta sigue el patrón: `Component.tsx`, `Component.module.css`, `index.ts`, `Component.test.tsx`.

### Documentación por componente

Cada componente tiene su propio archivo `NombreComponente.md` con detalle de archivos, dependencias y traducciones:

| Componente | Documentación |
|---|---|
| About | [src/components/About/About.md](src/components/About/About.md) |
| Contact | [src/components/Contact/Contact.md](src/components/Contact/Contact.md) |
| ContactForm | [src/components/ContactForm/ContactForm.md](src/components/ContactForm/ContactForm.md) |
| CtaButton | [src/components/CtaButton/CtaButton.md](src/components/CtaButton/CtaButton.md) |
| Footer | [src/components/Footer/Footer.md](src/components/Footer/Footer.md) |
| Header | [src/components/Header/Header.md](src/components/Header/Header.md) |
| Hero | [src/components/Hero/Hero.md](src/components/Hero/Hero.md) |
| LanguageToggle | [src/components/LanguageToggle/LanguageToggle.md](src/components/LanguageToggle/LanguageToggle.md) |
| Logo | [src/components/Logo/Logo.md](src/components/Logo/Logo.md) |
| Projects | [src/components/Projects/Projects.md](src/components/Projects/Projects.md) |
| Services | [src/components/Services/Services.md](src/components/Services/Services.md) |
| SettingsMenu | [src/components/SettingsMenu/SettingsMenu.md](src/components/SettingsMenu/SettingsMenu.md) |
| ThemeToggle | [src/components/ThemeToggle/ThemeToggle.md](src/components/ThemeToggle/ThemeToggle.md) |

### Layout y navegación

| Componente | Función |
|---|---|
| **Header** | Barra de navegación sticky con logo, enlaces de ancla (`#servicios`, `#proyectos`, `#nosotros`, `#contacto`), menú hamburguesa en móvil y acceso a configuración. |
| **SettingsMenu** | Modal de ajustes con selector de idioma y tema. Se abre con el botón ⚙️ del header. |
| **Logo** | SVG de marca CTRL Studio. Variantes `header` y `about` para distintos fondos. |
| **Footer** | Pie de página con copyright dinámico y tagline. Usa `helpers.ts` para formatear el año. |

### Secciones de la landing

| Componente | Función |
|---|---|
| **Hero** | Sección principal con titular, tagline, subtítulo y botón CTA hacia contacto. |
| **Services** | Grid de 3 tarjetas de servicios (Web, Móvil, Soluciones a medida) con iconos y animación. |
| **About** | Sección “¿Por qué elegirnos?” con texto, lista de ventajas y visual con logo grande. |
| **Projects** | Portafolio de proyectos creados. Cards compactas con logo, descripción y enlace externo. Muestra slider automático si hay más de un proyecto. |
| **Contact** | Datos de contacto (teléfono, email) y el formulario `ContactForm`. |
| **ContactForm** | Formulario con validación HTML5. Envía mensajes vía EmailJS, muestra estados de envío/error y campo honeypot anti-spam. |
| **CtaButton** | Botón o enlace con estilo de llamada a la acción reutilizable en Hero y formulario. |

### Controles de preferencias

| Componente | Función |
|---|---|
| **LanguageToggle** | Alterna entre español e inglés. Persiste en `localStorage`. |
| **ThemeToggle** | Alterna entre tema claro y oscuro. Persiste en `localStorage`. |

### Archivos auxiliares por componente

| Archivo | Función |
|---|---|
| `ContactForm/helpers.ts` | Lee datos del formulario, valida configuración EmailJS, envía el correo y detecta envíos de bots (honeypot). |
| `Footer/helpers.ts` | Genera el texto de copyright con el año actual. |
| `*/index.ts` | Reexporta el componente para imports limpios (`@/components/Hero`). |
| `*.module.css` | Estilos encapsulados del componente (CSS Modules). |
| `*.test.tsx` | Pruebas unitarias con Vitest y Testing Library. |

---

## `src/config/` — Configuración

| Archivo | Función |
|---|---|
| `contact.ts` | Email de destino, credenciales EmailJS (Public Key, Service ID, Template ID), construcción de parámetros de plantilla, rate limiting y validación de seguridad (bloquea Private Key en cliente). |
| `contact.test.ts` | Pruebas de parámetros de plantilla, opciones de envío y configuración del servicio. |

Variables soportadas (ver `.env.example`):

- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

---

## `src/data/` — Datos estáticos

| Archivo | Función |
|---|---|
| `projects.ts` | Lista de proyectos del portafolio: `id`, `url`, `logoSrc`, `logoAlt`. Los textos descriptivos viven en `i18n/dictionaries.ts`. |

Para agregar un proyecto: añadir entrada aquí, logo en `public/projects/` y textos en diccionarios ES/EN.

---

## `src/i18n/` — Internacionalización

| Archivo | Función |
|---|---|
| `dictionaries.ts` | Textos de la UI en español (`es`) e inglés (`en`): navegación, secciones, formulario, footer, ajustes. |
| `I18nProvider.tsx` | Contexto React de idioma. Expone `t` (traducciones), `locale` y `setLocale`. |

---

## `src/lib/` — Utilidades

| Archivo | Función |
|---|---|
| `basePath.ts` | Prefijo de ruta `/ctrlStudio` para producción (GitHub Pages). Función `withBasePath()` para assets en `public/`. |
| `basePath.test.ts` | Pruebas del helper de rutas. |

---

## `src/theme/` — Tema visual

| Archivo | Función |
|---|---|
| `ThemeProvider.tsx` | Contexto de tema (`light` / `dark`). Aplica `data-theme` en `<html>` y persiste preferencia en `localStorage`. |

---

## `src/test/` — Infraestructura de pruebas

| Archivo | Función |
|---|---|
| `render.tsx` | Helper `renderWithProviders()` que envuelve componentes con `ThemeProvider` e `I18nProvider` en tests. |

---

## `public/` — Assets estáticos

| Archivo / carpeta | Función |
|---|---|
| `.nojekyll` | Evita que GitHub Pages procese el sitio con Jekyll (necesario para `_next/`). |
| `projects/revloh-logo.png` | Logo del proyecto Revloh en la sección de portafolio. |
| `*.svg` | Iconos por defecto de Next.js (no usados activamente en la landing). |

---

## Archivos de configuración en la raíz

| Archivo | Función |
|---|---|
| `package.json` | Dependencias, scripts (`dev`, `build`, `test`, `lint`). |
| `next.config.ts` | Export estático, `basePath` para GitHub Pages, `trailingSlash` e imágenes sin optimización. |
| `tsconfig.json` | Configuración TypeScript y alias `@/*` → `src/*`. |
| `eslint.config.mjs` | Reglas de lint con `eslint-config-next`. |
| `postcss.config.mjs` | PostCSS con Tailwind CSS v4. |
| `vitest.config.mts` | Configuración de Vitest (entorno jsdom, setup, alias). |
| `vitest.setup.ts` | Setup global de tests (`@testing-library/jest-dom`). |
| `.env.example` | Plantilla de variables de entorno para EmailJS y contacto. |
| `.gitignore` | Excluye `node_modules`, `.next`, `.env*` (excepto `.env.example`). |
| `AGENTS.md` / `CLAUDE.md` | Reglas para agentes de IA que trabajan en el repo. |

---

## CI/CD

| Archivo | Función |
|---|---|
| `.github/workflows/nextjs.yml` | Build y deploy automático a GitHub Pages en cada push a `main`. Usa `NEXT_PUBLIC_BASE_PATH` y secrets opcionales de EmailJS. |

---

## Flujo del formulario de contacto

```
Usuario completa ContactForm
        ↓
isHoneypotSubmission() → si es bot, se descarta
        ↓
readContactFormData() → extrae name, email, message
        ↓
assertEmailJsConfig() → valida Public Key y IDs
        ↓
buildEmailJsTemplateParams() → arma variables de plantilla
        ↓
emailjs.send() → envía a miguel_rg_esteban@hotmail.com
```

Configuración requerida en [EmailJS Dashboard](https://dashboard.emailjs.com/):

1. **Allowed Origins:** `https://miguelreina.github.io`, `http://localhost:3000`
2. **Service:** Outlook conectado (`service_9lu9o7h`)
3. **Template:** variables `{{to_email}}`, `{{reply_to}}`, `{{subject}}`, `{{name}}`, `{{email}}`, `{{message}}`
4. **Solo Public Key** en el cliente — nunca la Private Key

---

## Scripts disponibles

| Comando | Función |
|---|---|
| `npm run dev` | Servidor de desarrollo en `http://localhost:3000` |
| `npm run build` | Build estático en carpeta `out/` |
| `npm run start` | Sirve el build de producción |
| `npm test` | Ejecuta todos los tests con Vitest |
| `npm run lint` | Análisis estático con ESLint |

---

## URL de producción

**https://miguelreina.github.io/ctrlStudio/**

En desarrollo local la app funciona en la raíz (`/`). En producción todas las rutas y assets llevan el prefijo `/ctrlStudio`.
