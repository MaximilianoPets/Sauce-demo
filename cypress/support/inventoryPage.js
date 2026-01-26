export class Inventorypage {

    constructor() {
        this.tituloPagina = '.title';
        this.botonCarrito = '.shopping_cart_link';

        this.botonAgregarBikeLight = '#add-to-cart-sauce-labs-bike-light';
        this.botonAgregarBackpackError = '[data-test="checkout"]';
    }

    validarPaginaInventory() {
        cy.get(this.tituloPagina).should('have.text', 'Products');
        return this;
    }

    agregarSauceLabsBikeLightAlCarrito() {
        cy.get(this.botonAgregarBikeLight).click();
        return this;
    }
    agregarSauceLabsBackpackAlCarritoError() {
        cy.get(this.botonAgregarBackpackError).click();
        return this;
    }

    irAlCarrito() {
        cy.get(this.botonCarrito).click();
        return this;
    }
}
