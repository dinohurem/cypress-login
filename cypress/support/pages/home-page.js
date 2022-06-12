export class HomePage {
  visit() {
    let url = Cypress.env("baseUrl");
    cy.visit(url + "/events");
  }

  verifyUrl() {
    cy.url().should("eq", Cypress.env("homeUrl"));
  }

  verifyToken(token) {
    cy.window().its("sessionStorage").invoke("getItem", token).should("exist");
  }
}
export default HomePage;
