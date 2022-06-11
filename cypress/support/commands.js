import { authenticationSelectors } from "../constants/selectors/authentication";
import { WelcomePage } from "./pages/welcome-page";

// Login commands.
Cypress.Commands.add("login", (email, password) => {
  const args = { email, password };
  const welcomePage = new WelcomePage();
  cy.session(args, () => {
    welcomePage.visit();
    welcomePage.submit();
    cy.wait(500);

    cy.get(authenticationSelectors.userNameTextField).type(email);
    cy.get(authenticationSelectors.passwordTextField).type(password);
    cy.get('[data-testid="login-button"]').click();
    cy.url().should("contain", "/events");
  });
});

Cypress.Commands.add("loginWithoutSession", (email, password) => {
  const welcomePage = new WelcomePage();

  welcomePage.visit();
  welcomePage.submit();

  cy.get(authenticationSelectors.userNameTextField).type(email);
  cy.get(authenticationSelectors.passwordTextField).type(password);
  cy.get('[data-testid="login-button"]').click();
  cy.url().should("contain", "/events");
});

// Logout command.
Cypress.Commands.add("logout", (url, email, password) => {
  cy.visit("https://qa-task-web.ministryofprogramming.com/events");
  cy.get(authenticationSelectors.userNameTextField).type(email);
  cy.get(authenticationSelectors.passwordTextField).type(password);
  cy.get('[data-testid="login-button"]').click();
  cy.url().should("contain", "/events");
});

// Settings commands.
Cypress.Commands.add("openSettings", (payment) => {
  // Click on Add Payment button.
  const paymentsPage = new PaymentsPage();
  cy.wait(500);

  cy.log("Verify that the title contains 'Payments'");
  paymentsPage.getTitle().should("contain.text", "Payments:");

  cy.log("Click on the Add Payment button.");
  paymentsPage.getAddPaymentButton().click();

  // Populate required fields.
  cy.log("Populate new payment info.");

  // Populate payment info.
  helper.populateNewPaymentPage(payment);
});
