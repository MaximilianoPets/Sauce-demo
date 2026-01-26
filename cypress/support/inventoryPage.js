export class Inventorypage {

    constructor() {
        this.tituloPagina = '.title';
        this.botonCarrito = '.shopping_cart_link';

        this.botonAgregarBikeLight = '#add-to-cart-sauce-labs-bike-light';
        this.botonAgregarBackpackError = '[data-test="checkout"]';
    }

    validarPaginaInventory() {
        cy.get(this.tituloPagina).should('have.text', 'Products');
    }

    agregarSauceLabsBikeLightAlCarrito() {
        cy.get(this.botonAgregarBikeLight).click();
    }
    agregarSauceLabsBackpackAlCarritoError() {
        cy.get(this.botonAgregarBackpackError).click();
    }

    irAlCarrito() {
        cy.get(this.botonCarrito).click();
    }
}
