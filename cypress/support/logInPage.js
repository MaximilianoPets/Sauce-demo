export class LoginPage {
    constructor() {
        this.url = Cypress.env('BASE_URL');
        this.inputUsuario = '#user-name';
        this.inputPassword = '#password';
        this.botonLogin = '#login-button';
        this.mensajeError = '[data-test="error"]';

        this.usuarioValido = {
            usuario: Cypress.env('USER_VALID'),
            password: Cypress.env('PASSWORD_VALID')
        };

        this.usuarioBloqueado = {
            usuario: Cypress.env('USER_LOCKED'),
            password: Cypress.env('PASSWORD_LOCKED')
        };
    }

    visitarPagina() {
        cy.visit(this.url);
    }

    escribirUsuario(usuario) {
        cy.get(this.inputUsuario).clear().type(usuario);
    }

    escribirPassword(password) {
        cy.get(this.inputPassword).clear().type(password);
    }

    hacerClickEnLogin() {
        cy.get(this.botonLogin).click();
    }

    validarLoginExitoso() {
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
    }

    validarMensajeUsuarioBloqueado() {
        cy.get(this.mensajeError)
            .should('be.visible')
            .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    }
}


