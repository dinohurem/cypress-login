import { accountSelectors } from "../../../constants/selectors/account";
import { accountTexts } from "../../../constants/texts/account";

export class LoginSettingsPage {
  visit() {
    let url = Cypress.env("baseUrl");
    cy.visit(url + "/settings/login-settings");
  }

  verifyUrl() {
    cy.url().should("contain", "/settings/login-settings");
  }

  verifyTextPresent(text) {
    cy.contains(text).should("have.length", 1);
  }

  verifyElementPresent(selector) {
    cy.get(selector).should("have.length", 1);
  }

  changeField(selector, value) {
    cy.get(selector).type(value);
  }

  submit() {
    cy.get(accountSelectors.changePasswordButton).click();
    cy.contains(accountTexts.updatePasswordConfirmationText).should(
      "have.length",
      1
    );
  }
}
export default LoginSettingsPage;
