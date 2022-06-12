import { commonTexts } from "../../constants/texts/common";
import { HomePage } from "../../support/pages/home-page";

const email = Cypress.env("email");
const password = Cypress.env("password");
const homePage = new HomePage();

describe("Login", () => {
  before(() => {
    cy.log("Clearing cookies and session storage...");
    cy.clearCookies();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

  beforeEach(() => {
    cy.login(email, password);
  });

  it("should successfully login", () => {
    cy.log("Verifying URL...");
    homePage.visit();
    //homePage.verifyUrl();
  });

  it("should successfully verify tokens presence", () => {
    cy.log("Verifying tokens...");
    homePage.visit();
    cy.window()
      .its("sessionStorage")
      .invoke("getItem", "Testing-token")
      .should("exist");
    //homePage.verifyToken(commonTexts.token);
    homePage.verifyToken(commonTexts.refreshToken);
  });
});
