import { LoginPage } from '../../support/logInPage';

const loginPage = new LoginPage();

describe('Login', () => {
  beforeEach(() => {
    loginPage.visitarPagina();
  });

  it('T1-Login con credenciales válidas ', () => {

    loginPage.escribirUsuario(loginPage.usuarioValido.usuario);
    loginPage.escribirPassword(loginPage.usuarioValido.password);
    loginPage.hacerClickEnLogin();
    loginPage.validarLoginExitoso();
  });

  it('T5-Login con usuario bloqueado', () => {

    loginPage.escribirUsuario(loginPage.usuarioBloqueado.usuario);
    loginPage.escribirPassword(loginPage.usuarioBloqueado.password);
    loginPage.hacerClickEnLogin();
    loginPage.validarMensajeUsuarioBloqueado();
  });
});
