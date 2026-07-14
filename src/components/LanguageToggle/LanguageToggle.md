# LanguageToggle

Selector de idioma **ES / EN**.

## Responsabilidad

- Alternar entre español e inglés al hacer clic.
- Mostrar bandera y código del idioma activo.
- Persistir preferencia vía `I18nProvider` (`localStorage`).

## Archivos

| Archivo | Descripción |
|---|---|
| `LanguageToggle.tsx` | Botón de cambio de idioma. |
| `LanguageToggle.module.css` | Estilo compacto del toggle. |
| `LanguageToggle.test.tsx` | Pruebas de cambio de locale. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/i18n/I18nProvider`
- `@/i18n/dictionaries` — tipo `Locale`

## Traducciones (`dictionaries.ts`)

- `language.switchTo` — usado como `aria-label`

## Usado en

- `SettingsMenu` — fila de configuración de idioma
