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
    loginPage
      .visitarPagina()
      .escribirUsuario(loginPage.usuarioValido.usuario)
      .escribirPassword(loginPage.usuarioValido.password)
      .hacerClickEnLogin()
      .validarLoginExitoso();
  });

  it('T14-Validar cálculo de Item Total + Tax, la suma coincide con el total mostrado', () => {

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

  it('T6-Agregar un producto al carrito', () => {

    inventoryPage
      .validarPaginaInventory()
      .agregarSauceLabsBackpackAlCarritoError()
      .irAlCarrito();
  });
});

