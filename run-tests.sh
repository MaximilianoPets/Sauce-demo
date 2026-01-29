#!/bin/bash

echo "Ejecutando tests en orden..."

npx cypress run --spec "cypress/e2e/logIn/logIn.cy.js" --browser chrome
npx cypress run --spec "cypress/e2e/inventario/productos.cy.js" --browser chrome
npx cypress run --spec "cypress/e2e/carritoDeCompras/carritoDeCompras.cy.js" --browser chrome

echo "Tests completados. Generando reporte..."
npm run allure:generate
npm run allure:open
