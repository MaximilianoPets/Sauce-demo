#!/bin/bash

echo "======================================"
echo "Ejecutando tests de Cypress en orden"
echo "======================================"

echo ""
echo "1. Ejecutando tests de Login..."
npx cypress run --spec "cypress/e2e/logIn/logIn.cy.js" --browser chrome

if [ $? -ne 0 ]; then
  echo "❌ Tests de Login fallaron"
  exit 1
fi

echo ""
echo "2. Ejecutando tests de Productos..."
npx cypress run --spec "cypress/e2e/inventario/productos.cy.js" --browser chrome

if [ $? -ne 0 ]; then
  echo "❌ Tests de Productos fallaron"
  exit 1
fi

echo ""
echo "3. Ejecutando tests de Carrito de Compras..."
npx cypress run --spec "cypress/e2e/carritoDeCompras/carritoDeCompras.cy.js" --browser chrome

if [ $? -ne 0 ]; then
  echo "❌ Tests de Carrito de Compras fallaron"
  exit 1
fi

echo ""
echo "======================================"
echo "✅ Todos los tests pasaron exitosamente"
echo "======================================"

echo ""
echo "Generando reporte de Allure..."
npm run allure:generate
npm run allure:open
