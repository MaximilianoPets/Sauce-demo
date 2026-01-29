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

    validarPrecioProductoEnInventario(nombreProducto, precioEsperado) {
        cy.contains('.inventory_item_name', nombreProducto)
            .parents('.inventory_item')
            .find('.inventory_item_price')
            .should('have.text', precioEsperado);
        return this;
    }

    validarDescripcionProductoEnInventario(nombreProducto, descripcionEsperada) {
        cy.contains('.inventory_item_name', nombreProducto)
            .parents('.inventory_item')
            .find('.inventory_item_desc')
            .should('have.text', descripcionEsperada);
        return this;
    }

    hacerClickEnImagenProducto(nombreProducto) {
        cy.contains('.inventory_item_name', nombreProducto)
            .parents('.inventory_item')
            .find('img')
            .click();
        return this;
    }

    validarPrecioEnDetalleProducto(precioEsperado) {
        cy.get('.inventory_details_price').should('have.text', precioEsperado);
        return this;
    }

    validarDescripcionEnDetalleProducto(descripcionEsperada) {
        cy.get('.inventory_details_desc').should('have.text', descripcionEsperada);
        return this;
    }

    volverAlInventario() {
        cy.get('[data-test="back-to-products"]').click();
        return this;
    }
}
