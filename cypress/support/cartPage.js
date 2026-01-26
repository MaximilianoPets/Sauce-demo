export class CartPage {

  constructor() {
    
    this.nombreProducto = '[data-test="inventory-item-name"]';
    this.botonCheckout = '[data-test="checkout"]';
  }

  validarProductoEnCarrito() {
    cy.get(this.nombreProducto)
      .should('be.visible')
      .and('have.text', 'Sauce Labs Bike Light');
  }

  hacerClickEnCheckout() {
    cy.get(this.botonCheckout).click();
  }
}
