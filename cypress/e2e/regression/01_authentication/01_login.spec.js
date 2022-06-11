import { commonSelectors } from "../../../constants/selectors/home";
import { HomePage } from "../../../support/pages/home-page";

const url = Cypress.env("baseUrl");
const email = Cypress.env("email");
const password = Cypress.env("password");
const homePage = new HomePage();

describe("Authentication", () => {
  before(() => {
    cy.login(email, password);
  });

  it("should successfully login", () => {
    homePage.visit();
    cy.url().should("include", "/events");
    //cy.get(commonSelectors.documentsHeader).should("contain", "Events");
  });

  xit("should successfully verify URL", () => {
    cy.url().should("include", "/events");
  });

  xit("should successfully verify user", () => {
    cy.get(commonSelectors.userNameLabel).should(
      "contain",
      Cypress.env("user")
    );
    cy.get(commonSelectors.userNameLabel)
      .should("be.visible")
      .should("have.css", "font-family", "Nunito, sans-serif")
      .should("have.css", "font-style", "normal")
      .should("have.css", "font-weight", "600")
      .should("have.css", "text-align", "right")
      .should("have.css", "text-transform", "capitalize")
      .should("have.css", "color", "rgb(77, 86, 98)");
  });

  xit("should successfully verify logo on login", () => {
    cy.get(commonSelectors.logoImageExpanded)
      .should("have.class", "logo")
      .and("have.class", "logo-opened");
  });

  xit("should successfully redirect to profile page after login", () => {
    cy.url().should("include", "/documents/projects");
    cy.clearCookies();
    cy.visit(url + "/profile/edit", {
      auth: {
        username: adminUser,
        password: adminPw,
      },
    });
  });

  xit("should successfully verify cookie", () => {
    cy.getCookie(
      "auth0." + Cypress.env("auth0_client_id") + ".is.authenticated"
    ).should("exist");
    cy.getCookie(
      "auth0." + Cypress.env("auth0_client_id") + ".is.authenticated"
    ).should("have.property", "value", "true");
  });
});
