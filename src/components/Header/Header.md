# Header

Barra de navegación superior sticky.

## Responsabilidad

- Mostrar logo y nombre de marca.
- Navegar a secciones por anclas (`#servicios`, `#proyectos`, `#nosotros`, `#contacto`).
- Menú hamburguesa responsive en móvil.
- Acceso al menú de configuración (idioma y tema).

## Archivos

| Archivo | Descripción |
|---|---|
| `Header.tsx` | Navegación, burger menu y controles. |
| `Header.module.css` | Layout flex, sticky, responsive y animación del menú. |
| `Header.test.tsx` | Pruebas de links, traducción y anclas. |
| `index.ts` | Reexport del componente. |

## Dependencias

- `@/components/Logo`
- `@/components/SettingsMenu`
- `@/i18n/I18nProvider`

## Traducciones (`dictionaries.ts`)

- `nav.services`, `nav.projects`, `nav.about`, `nav.contact`
- `nav.openMenu`, `nav.closeMenu`

## Comportamiento móvil

- Botón hamburguesa abre/cierra `navList`.
- Al hacer clic en un enlace, el menú se cierra automáticamente.
