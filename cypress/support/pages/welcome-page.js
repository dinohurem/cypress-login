import { commonTexts } from "../../constants/texts/common";

export class WelcomePage {
  visit() {
    let url = Cypress.env("baseUrl");
    cy.visit(url);
  }

  verifyUrl() {
    cy.url().should("eq", Cypress.env("baseUrl"));
  }

  login() {
    cy.contains(commonTexts.buttonLogin).click();
  }

  signup() {
    cy.contains(commonTexts.buttonSignup).click();
  }
}
export default WelcomePage;
