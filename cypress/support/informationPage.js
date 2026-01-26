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
    }

    escribirNombre(nombre) {
        cy.get(this.inputNombre).clear().type(nombre);
    }

    escribirApellido(apellido) {
        cy.get(this.inputApellido).clear().type(apellido);
    }

    escribirCodigoPostal(codigoPostal) {
        cy.get(this.inputCodigoPostal).clear().type(codigoPostal);
    }

    hacerClickEnContinue() {
        cy.get(this.botonContinue).click();
    }
}
