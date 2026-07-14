# ThemeToggle

Selector de tema **claro / oscuro**.

## Responsabilidad

- Alternar entre tema `light` y `dark`.
- Mostrar icono 🌙 (modo claro) o ☀️ (modo oscuro).
- Persistir preferencia vía `ThemeProvider` (`localStorage`).

## Archivos

| Archivo | Descripción |
|---|---|
| `ThemeToggle.tsx` | Botón de cambio de tema. |
| `ThemeToggle.module.css` | Estilo compacto del toggle. |
| `ThemeToggle.test.tsx` | Pruebas de cambio de tema y aria-label. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/theme/ThemeProvider`
- `@/i18n/I18nProvider` — labels de accesibilidad

## Traducciones (`dictionaries.ts`)

- `theme.toDark` — aria-label cuando está en modo claro
- `theme.toLight` — aria-label cuando está en modo oscuro

## Efecto global

Al cambiar tema, `ThemeProvider` aplica `data-theme="dark"` en `<html>`,
activando las variables CSS definidas en `globals.css`.

## Usado en

- `SettingsMenu` — fila de configuración de tema
