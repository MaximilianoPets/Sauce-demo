import { LoginPage } from '../../support/logInPage';
import { Inventorypage } from '../../support/inventoryPage';
import { CartPage } from '../../support/cartPage';
import { InformationPage } from '../../support/informationPage';
import { CheckoutPage } from '../../support/checkoutPage';

const loginPage = new LoginPage();
const inventoryPage = new Inventorypage();
const cartPage = new CartPage();
const informationPage = new InformationPage();
const checkoutPage = new CheckoutPage();

describe('Login', () => {

    beforeEach(() => {
        loginPage.visitarPagina();
        loginPage.escribirUsuario(loginPage.usuarioValido.usuario);
        loginPage.escribirPassword(loginPage.usuarioValido.password);
        loginPage.hacerClickEnLogin();
        loginPage.validarLoginExitoso();
    });

    it('T14-Validar cálculo de Item Total + Tax, la suma coincide con el total mostrado', () => {

        cy.fixture('data').then((datos) => {

            inventoryPage.validarPaginaInventory();
            inventoryPage.agregarSauceLabsBikeLightAlCarrito();
            inventoryPage.irAlCarrito();

            cartPage.validarProductoEnCarrito();
            cartPage.hacerClickEnCheckout();

            informationPage.validarUrlInformation();
            informationPage.escribirNombre(datos.nombre);
            informationPage.escribirApellido(datos.apellido);
            informationPage.escribirCodigoPostal(datos.codigoPostal);
            informationPage.hacerClickEnContinue();

            checkoutPage.validarUrlCheckout();
            checkoutPage.validarCalculoTotal();
        });
    });

    it('T6-Agregar un producto al carrito', () => {
        inventoryPage.validarPaginaInventory();
        inventoryPage.agregarSauceLabsBackpackAlCarritoError();
        inventoryPage.irAlCarrito();

    });

});
