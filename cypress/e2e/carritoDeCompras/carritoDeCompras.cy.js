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

describe('Carrito de Compras', () => {

  beforeEach(() => {
    loginPage
      .visitarPagina()
      .escribirUsuario(loginPage.usuarioValido.usuario)
      .escribirPassword(loginPage.usuarioValido.password)
      .hacerClickEnLogin()
      .validarLoginExitoso();
  });

  it('Validar cálculo de Item Total + Tax, la suma coincide con el total mostrado', () => {

    cy.fixture('data').then((datos) => {

      inventoryPage
        .validarPaginaInventory()
        .agregarSauceLabsBikeLightAlCarrito()
        .irAlCarrito();

      cartPage
        .validarProductoEnCarrito()
        .hacerClickEnCheckout();

      informationPage
        .validarUrlInformation()
        .escribirNombre(datos.nombre)
        .escribirApellido(datos.apellido)
        .escribirCodigoPostal(datos.codigoPostal)
        .hacerClickEnContinue();

      checkoutPage
        .validarUrlCheckout()
        .validarCalculoTotal();
    });
  });

  it.skip('Flujo de compra con usuario error', () => {

    loginPage
      .visitarPagina()
      .escribirUsuario(loginPage.usuarioError.usuario)
      .escribirPassword(loginPage.usuarioError.password)
      .hacerClickEnLogin();

    cy.fixture('data').then((datos) => {

      inventoryPage
        .validarPaginaInventory()
        .agregarSauceLabsBikeLightAlCarrito()
        .irAlCarrito();

      cartPage
        .validarProductoEnCarrito()
        .hacerClickEnCheckout();

      informationPage
        .validarUrlInformation()
        .escribirNombre(datos.nombre)
        .escribirApellido(datos.apellido)
        .escribirCodigoPostal(datos.codigoPostal)
        .hacerClickEnContinue();

      checkoutPage
        .validarUrlCheckout()
        .validarCalculoTotal();
    });
  });
});

