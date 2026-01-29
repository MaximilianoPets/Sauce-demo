import { LoginPage } from '../../support/logInPage';
import { Inventorypage } from '../../support/inventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new Inventorypage();

describe('Validación de Productos', () => {

  beforeEach(() => {
    loginPage
      .visitarPagina()
      .escribirUsuario(loginPage.usuarioValido.usuario)
      .escribirPassword(loginPage.usuarioValido.password)
      .hacerClickEnLogin()
      .validarLoginExitoso();
  });

  it('T1-Validar precio y descripción de Sauce Labs Backpack', () => {

    cy.fixture('Productos').then((data) => {
      const producto = data.productos[0];

      inventoryPage
        .validarPaginaInventory()
        .validarPrecioProductoEnInventario(producto.nombre, producto.precio)
        .validarDescripcionProductoEnInventario(producto.nombre, producto.descripcion)
        .hacerClickEnImagenProducto(producto.nombre);

      inventoryPage
        .validarPrecioEnDetalleProducto(producto.precio)
        .validarDescripcionEnDetalleProducto(producto.descripcion)
        .volverAlInventario();
    });
  });

  it('T2-Validar precio y descripción de Sauce Labs Bike Light', () => {

    cy.fixture('Productos').then((data) => {
      const producto = data.productos[1];

      inventoryPage
        .validarPaginaInventory()
        .validarPrecioProductoEnInventario(producto.nombre, producto.precio)
        .validarDescripcionProductoEnInventario(producto.nombre, producto.descripcion)
        .hacerClickEnImagenProducto(producto.nombre);

      inventoryPage
        .validarPrecioEnDetalleProducto(producto.precio)
        .validarDescripcionEnDetalleProducto(producto.descripcion)
        .volverAlInventario();
    });
  });

  it('T3-Validar precio y descripción de Sauce Labs Bolt T-Shirt', () => {

    cy.fixture('Productos').then((data) => {
      const producto = data.productos[2];

      inventoryPage
        .validarPaginaInventory()
        .validarPrecioProductoEnInventario(producto.nombre, producto.precio)
        .validarDescripcionProductoEnInventario(producto.nombre, producto.descripcion)
        .hacerClickEnImagenProducto(producto.nombre);

      inventoryPage
        .validarPrecioEnDetalleProducto(producto.precio)
        .validarDescripcionEnDetalleProducto(producto.descripcion)
        .volverAlInventario();
    });
  });

  it('T4-Validar precio y descripción de Sauce Labs Fleece Jacket', () => {

    cy.fixture('Productos').then((data) => {
      const producto = data.productos[3];

      inventoryPage
        .validarPaginaInventory()
        .validarPrecioProductoEnInventario(producto.nombre, producto.precio)
        .validarDescripcionProductoEnInventario(producto.nombre, producto.descripcion)
        .hacerClickEnImagenProducto(producto.nombre);

      inventoryPage
        .validarPrecioEnDetalleProducto(producto.precio)
        .validarDescripcionEnDetalleProducto(producto.descripcion)
        .volverAlInventario();
    });
  });

  it('T5-Validar precio y descripción de Sauce Labs Onesie', () => {

    cy.fixture('Productos').then((data) => {
      const producto = data.productos[4];

      inventoryPage
        .validarPaginaInventory()
        .validarPrecioProductoEnInventario(producto.nombre, producto.precio)
        .validarDescripcionProductoEnInventario(producto.nombre, producto.descripcion)
        .hacerClickEnImagenProducto(producto.nombre);

      inventoryPage
        .validarPrecioEnDetalleProducto(producto.precio)
        .validarDescripcionEnDetalleProducto(producto.descripcion)
        .volverAlInventario();
    });
  });

  it('T6-Validar precio y descripción de Test.allTheThings() T-Shirt (Red)', () => {

    cy.fixture('Productos').then((data) => {
      const producto = data.productos[5];

      inventoryPage
        .validarPaginaInventory()
        .validarPrecioProductoEnInventario(producto.nombre, producto.precio)
        .validarDescripcionProductoEnInventario(producto.nombre, producto.descripcion)
        .hacerClickEnImagenProducto(producto.nombre);

      inventoryPage
        .validarPrecioEnDetalleProducto(producto.precio)
        .validarDescripcionEnDetalleProducto(producto.descripcion)
        .volverAlInventario();
    });
  });
});
