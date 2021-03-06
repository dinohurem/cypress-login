import { accountSelectors } from "../../../constants/selectors/account";
import { accountTexts } from "../../../constants/texts/account";

export class GeneralInfoPage {
  visit() {
    let url = Cypress.env("baseUrl");
    cy.visit(url + "/settings/account-information");
  }

  verifyUrl() {
    cy.url().should("contain", "/settings/account-information");
  }

  verifyTextPresent(text) {
    cy.contains(text).should("have.length", 1);
  }

  verifyElementPresent(selector) {
    cy.get(selector).should("have.length", 1);
  }

  verifyElementDisabled(selector) {
    cy.get(selector).should("be.disabled");
  }

  changeField(selector, value) {
    cy.get(selector).type(value);
  }

  submit() {
    cy.get(accountSelectors.updateSettingsButton).click();
    cy.contains(accountTexts.updateSettingsConfirmationText).should(
      "have.length",
      1
    );
  }
}
export default GeneralInfoPage;
