export class InformationPage {

    constructor() {

        this.urlInformation = 'https://www.saucedemo.com/checkout-step-one.html';
        this.inputNombre = '[data-test="firstName"]';
        this.inputApellido = '[data-test="lastName"]';
        this.inputCodigoPostal = '[data-test="postalCode"]';
        this.botonContinue = '[data-test="continue"]';
    }

    validarUrlInformation() {
        cy.url().should('eq', this.urlInformation);
        return this;
    }

    escribirNombre(nombre) {
        cy.get(this.inputNombre).clear().type(nombre);
        return this;
    }

    escribirApellido(apellido) {
        cy.get(this.inputApellido).clear().type(apellido);
        return this;
    }

    escribirCodigoPostal(codigoPostal) {
        cy.get(this.inputCodigoPostal).clear().type(codigoPostal);
        return this;
    }

    hacerClickEnContinue() {
        cy.get(this.botonContinue).click();
        return this;
    }
}
