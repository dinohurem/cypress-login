import LoginPage from "./pages/auth/login-page";
import RegistrationPage from "./pages/auth/registration-page";
import HomePage from "./pages/home-page";
import { WelcomePage } from "./pages/welcome-page";
const welcomePage = new WelcomePage();
const loginPage = new LoginPage();
const registerPage = new RegistrationPage();
const homePage = new HomePage();

// Login.
Cypress.Commands.add("login", (email, password) => {
  cy.log("Logging in with session...");
  const args = { email, password };

  cy.session(args, () => {
    welcomePage.visit();
    welcomePage.login();

    loginPage.verifyUrl();
    loginPage.submit(email, password);
    homePage.verifyUrl();
  });
});

Cypress.Commands.add("loginWithoutSession", (email, password) => {
  cy.log("Logging in without session...");
  welcomePage.visit();
  welcomePage.login();

  loginPage.verifyUrl();
  loginPage.submit(email, password);
  homePage.verifyUrl();
});

// Signup.
Cypress.Commands.add("register", (email, name, password, phone) => {
  cy.log("Registration in progress...");
  welcomePage.visit();
  welcomePage.signup();

  registerPage.verifyUrl();
  registerPage.submit(email, name, password, phone);
});
