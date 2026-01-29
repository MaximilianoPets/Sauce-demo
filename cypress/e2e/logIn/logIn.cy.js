import { LoginPage } from '../../support/logInPage';

const loginPage = new LoginPage();

describe('Login', () => {

  beforeEach(() => {
    loginPage.visitarPagina();
  });

  it('Login con credenciales válidas', () => {

    loginPage
      .escribirUsuario(loginPage.usuarioValido.usuario)
      .escribirPassword(loginPage.usuarioValido.password)
      .hacerClickEnLogin()
      .validarLoginExitoso();
  });

  it('Login con usuario bloqueado', () => {

    loginPage
      .escribirUsuario(loginPage.usuarioBloqueado.usuario)
      .escribirPassword(loginPage.usuarioBloqueado.password)
      .hacerClickEnLogin()
      .validarMensajeUsuarioBloqueado();
  });

  it('Login con usuario error', () => {

    loginPage
      .escribirUsuario(loginPage.usuarioError.usuario)
      .escribirPassword(loginPage.usuarioError.password)
      .hacerClickEnLogin();
  });
});

