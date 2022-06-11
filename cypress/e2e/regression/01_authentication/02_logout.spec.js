import { authenticationSelectors } from "../../../constants/selectors/authentication";
import { commonSelectors } from "../../../constants/selectors/common";

const url = Cypress.env("baseUrl");
const adminUser = Cypress.env("admin_username");
const adminPw = Cypress.env("admin_password");
const user = Cypress.env("auth0_username");
const pw = Cypress.env("auth0_password");

describe("Authentication", () => {
  beforeEach(() => {
    cy.loginWithoutSession(user, pw);
  });

  xit("should successfully logout using sidebar link", () => {
    cy.get(authenticationSelectors.logoutSidebarButton).click();
    cy.contains("Continue").should(
      "have.css",
      "background-color",
      "rgb(101, 107, 246)"
    );
  });

  xit("should successfully logout from profile dropdown", () => {
    cy.get(commonSelectors.profileMenuDropdown).click();
    cy.get(authenticationSelectors.logoutDropdownButton).click();
    cy.contains("Continue").should(
      "have.css",
      "background-color",
      "rgb(101, 107, 246)"
    );
  });
});
