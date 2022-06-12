import { authenticationSelectors } from "../../../constants/selectors/authentication";

export class LoginPage {
  visit() {
    let url = Cypress.env("baseUrl");
    cy.visit(url + "/login");
  }

  verifyUrl() {
    cy.url().should("contain", "/login");
  }

  submit(email, password) {
    cy.get(authenticationSelectors.userNameTextFieldLogin).type(email);
    cy.get(authenticationSelectors.passwordTextFieldLogin).type(password);
    cy.get(authenticationSelectors.loginButton).click();
  }
}
export default LoginPage;
