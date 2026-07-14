# SettingsMenu

Modal de **configuración** (idioma y tema).

## Responsabilidad

- Abrir panel de ajustes desde el botón ⚙️ del Header.
- Agrupar `LanguageToggle` y `ThemeToggle` en un diálogo accesible.
- Cerrar con botón ✕, clic en backdrop o tecla `Escape`.

## Archivos

| Archivo | Descripción |
|---|---|
| `SettingsMenu.tsx` | Trigger, backdrop, modal y filas de configuración. |
| `SettingsMenu.module.css` | Overlay, modal centrado y layout de filas. |
| `SettingsMenu.test.tsx` | Pruebas de apertura, cierre y accesibilidad. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/components/LanguageToggle`
- `@/components/ThemeToggle`
- `@/i18n/I18nProvider`

## Traducciones (`dictionaries.ts`)

- `settings.open`, `settings.close`, `settings.title`
- `settings.language`, `settings.theme`

## Accesibilidad

- `role="dialog"` con `aria-modal="true"`
- `aria-expanded` en el botón trigger
- Cierre con `Escape`

## Usado en

- `Header` — dentro de `.controls`
