import { LoginPage } from '../../support/logInPage';

const loginPage = new LoginPage();

describe('Login', () => {

  beforeEach(() => {
    loginPage.visitarPagina();
  });

  it('T1-Login con credenciales válidas', () => {

    loginPage
      .escribirUsuario(loginPage.usuarioValido.usuario)
      .escribirPassword(loginPage.usuarioValido.password)
      .hacerClickEnLogin()
      .validarLoginExitoso();
  });

  it('T5-Login con usuario bloqueado', () => {

    loginPage
      .escribirUsuario(loginPage.usuarioBloqueado.usuario)
      .escribirPassword(loginPage.usuarioBloqueado.password)
      .hacerClickEnLogin()
      .validarMensajeUsuarioBloqueado();
  });
});

