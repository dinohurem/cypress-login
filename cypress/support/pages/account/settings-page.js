export class SettingsPage {
  visit() {
    let url = Cypress.env("baseUrl");
    cy.visit(url + "/settings");
  }

  verifyUrl() {
    cy.url().should("contain", "/settings");
  }

  verifyTextPresent(text) {
    cy.contains(text).should("have.length", 1);
  }
}
export default SettingsPage;
