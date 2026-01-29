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

        this.usuarioError = {
            usuario: Cypress.env('USER_ERROR'),
            password: Cypress.env('PASSWORD_ERROR')
        };
    }

    visitarPagina() {
        cy.visit(this.url);
        return this;
    }

    escribirUsuario(usuario) {
        cy.get(this.inputUsuario).clear().type(usuario);
        return this;
    }

    escribirPassword(password) {
        cy.get(this.inputPassword).clear().type(password);
        return this;
    }

    hacerClickEnLogin() {
        cy.get(this.botonLogin).click();
        return this;
    }

    validarLoginExitoso() {
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
        return this;
    }

    validarMensajeUsuarioBloqueado() {
        cy.get(this.mensajeError)
            .should('be.visible')
            .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
            return this;
    }
}


