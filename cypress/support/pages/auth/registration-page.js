import { authenticationSelectors } from "../../../constants/selectors/authentication";

export class RegistrationPage {
  visit() {
    let url = Cypress.env("baseUrl");
    cy.visit(url + "/signup");
  }

  verifyUrl() {
    cy.url().should("contain", "/signup");
  }

  submit(email, name, password, phone) {
    const code = Cypress.env("verificationCode");
    cy.get(authenticationSelectors.emailTextFieldSignUp).type(email);
    cy.get(authenticationSelectors.nameTextFieldSignUp).type(name);
    cy.get(authenticationSelectors.passwordTextFieldSignUp).type(password);
    cy.get(authenticationSelectors.confirmPasswordTextFieldSignUp).type(
      password
    );
    cy.get(authenticationSelectors.phoneTextFieldSignUp).type(phone);
    cy.get(authenticationSelectors.termsCheckboxSignUp).click({ force: true });
    cy.get(authenticationSelectors.signupButton).click();
    cy.get(authenticationSelectors.codeTextFieldSignUP).type(code);
    cy.get(authenticationSelectors.verifyCodeButton).click();
  }
}
export default RegistrationPage;
