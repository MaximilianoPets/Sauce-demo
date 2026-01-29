Framework de pruebas automatizadas con Cypress y Allure para navegadores Chrome y Edge.

## 🚀 Tecnologías Utilizadas

- **Cypress** v15.9.0 - Framework de testing E2E
- **Node.js** v4.1.5 (npm-run-all)
- **Allure Report** - Generación de reportes de pruebas
  - @shelex/cypress-allure-plugin v2.41.2
  - allure-commandline v2.36.0

## 📋 Prerequisitos

- Node.js instalado
- npm o yarn como gestor de paquetes

## 🔧 Instalación

1. Instalar dependencias:
```
npm install
```

2. Configurar variables de entorno:

Duplica el archivo `.env.example` y renómbralo a `.env`:
```
cp .env.example .env
```

3. Edita el archivo `.env` con tus credenciales según las variables descritas en la sección "Variables de Entorno" más abajo.

## ▶️ Comandos de Ejecución

### Ejecutar tests en orden secuencial
```bash
./run-tests.sh
```
Este script ejecuta los tests en el siguiente orden:
1. Login
2. Productos
3. Carrito de Compras

Y al finalizar genera y abre el reporte de Allure automáticamente.

### Ejecutar tests en Chrome
```
npm run test:chrome
```

### Ejecutar tests en Edge
```
npm run test:edge
```

### Ejecutar todos los tests
```
npm run run:all
```

Este comando ejecuta los tests en Chrome, luego en Edge, genera el reporte de Allure y lo abre automáticamente.

## 📊 Reportes Allure

### Generar reporte de Allure
```
npm run allure:generate
```

### Abrir reporte de Allure
```
npm run allure:open
```

## 🔄 CI/CD - GitHub Actions

El proyecto incluye un workflow de GitHub Actions que se ejecuta automáticamente en cada push. El workflow:

- ✅ Ejecuta los tests en orden secuencial (Login → Productos → Carrito)
- 📊 Genera reportes de Allure automáticamente
- 🌐 Publica los reportes en GitHub Pages
- 📸 Guarda screenshots y videos en caso de fallos

**Reporte en vivo:** https://maximilianopets.github.io/Sauce-demo/allure-report/




## 🔐 Variables de Entorno

El proyecto utiliza variables de entorno para manejar datos sensibles y configuraciones:

- `CYPRESS_BASE_URL` - URL base de la aplicación a testear
- `CYPRESS_USER_VALID` - Usuario válido para pruebas de login
- `CYPRESS_PASSWORD_VALID` - Contraseña válida
- `CYPRESS_USER_LOCKED` - Usuario bloqueado para pruebas negativas
- `CYPRESS_PASSWORD_LOCKED` - Contraseña del usuario bloqueado
- `CYPRESS_USER_ERROR` - Usuario con errores para pruebas específicas
- `CYPRESS_PASSWORD_ERROR` - Contraseña del usuario error

**Nota:** El archivo `.env` está incluido en `.gitignore` para proteger información sensible.

## ⚙️ Configuración

El proyecto está configurado para:
- ✅ Captura de screenshots en caso de fallos
- ❌ Grabación de video deshabilitada
- 📁 Resultados de Allure en `allure-results/`
- 🔐 Variables de entorno para datos sensibles

## 📝 Notas

- Los tests se ejecutan en modo headless por defecto
- Los reportes se generan automáticamente al ejecutar `npm run run:all`
- Las screenshots de errores se guardan en `cypress/screenshots/`
- Asegúrate de configurar el archivo `.env` antes de ejecutar los tests

