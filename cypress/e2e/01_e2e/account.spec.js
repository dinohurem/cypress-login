import { accountSelectors } from "../../constants/selectors/account";
import { accountTexts } from "../../constants/texts/account";
import Helper from "../../support/helper";
import GeneralInfoPage from "../../support/pages/account/general-info-page";
import LoginSettingsPage from "../../support/pages/account/login-settings-page";
import SettingsPage from "../../support/pages/account/settings-page";
import HomePage from "../../support/pages/home-page";

const email = Cypress.env("email");
const password = Cypress.env("password");
const homePage = new HomePage();
const settingsPage = new SettingsPage();
const generalInfoPage = new GeneralInfoPage();
const loginSettingsPage = new LoginSettingsPage();
const helper = new Helper();
const randomPassword = helper.getRandomPassword(8);

describe("Account", () => {
  before(() => {
    cy.log("Clearing cookies and session storage...");
    cy.clearCookies();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });
  });

  beforeEach(() => {});

  it("should successfully edit general User info", () => {
    cy.loginWithoutSession(email, password);
    let name = helper.getUniqueString(5);
    let address = helper.getUniqueString(5);
    homePage.visit();
    homePage.verifyUrl();

    settingsPage.visit();
    settingsPage.verifyUrl();
    settingsPage.verifyTextPresent(email);

    generalInfoPage.visit();
    generalInfoPage.verifyUrl();
    generalInfoPage.verifyTextPresent(
      accountTexts.updateSettingsRightPanelText
    );

    generalInfoPage.verifyElementPresent(accountSelectors.nameTextFieldAccount);
    generalInfoPage.verifyElementPresent(
      accountSelectors.emailTextFieldAccount
    );

    // There is a bug with selectors, so no point in using this method. Instead we check if there are 2 phone text elements.
    cy.get(accountSelectors.phoneTextFieldAccount).should("have.length", 2);

    generalInfoPage.verifyElementPresent(
      accountSelectors.addressTextFieldAccount
    );
    generalInfoPage.verifyElementPresent(accountSelectors.updateSettingsButton);

    generalInfoPage.verifyElementDisabled(
      accountSelectors.emailTextFieldAccount
    );
    generalInfoPage.verifyElementDisabled(
      accountSelectors.phoneTextFieldAccount
    );

    generalInfoPage.changeField(accountSelectors.nameTextFieldAccount, name);
    generalInfoPage.changeField(
      accountSelectors.addressTextFieldAccount,
      address
    );

    generalInfoPage.submit();
  });

  it("should successfully edit User password", () => {
    cy.loginWithoutSession(email, password);
    loginSettingsPage.visit();
    loginSettingsPage.verifyUrl();
    loginSettingsPage.verifyTextPresent(
      accountTexts.passwordChangeRightPanelText
    );

    loginSettingsPage.verifyElementPresent(
      accountSelectors.currentPasswordTextFieldAccount
    );
    loginSettingsPage.verifyElementPresent(
      accountSelectors.newPasswordTextFieldAccount
    );
    loginSettingsPage.verifyElementPresent(
      accountSelectors.confirmNewPasswordTextFieldAccount
    );
    loginSettingsPage.verifyElementPresent(
      accountSelectors.changePasswordButton
    );

    loginSettingsPage.changeField(
      accountSelectors.currentPasswordTextFieldAccount,
      password
    );
    loginSettingsPage.changeField(
      accountSelectors.newPasswordTextFieldAccount,
      randomPassword
    );
    loginSettingsPage.changeField(
      accountSelectors.confirmNewPasswordTextFieldAccount,
      randomPassword
    );

    loginSettingsPage.submit();
  });

  it("should successfully login and change to original password", () => {
    cy.loginWithoutSession(email, randomPassword);
    loginSettingsPage.visit();

    loginSettingsPage.changeField(
      accountSelectors.currentPasswordTextFieldAccount,
      randomPassword
    );
    loginSettingsPage.changeField(
      accountSelectors.newPasswordTextFieldAccount,
      password
    );
    loginSettingsPage.changeField(
      accountSelectors.confirmNewPasswordTextFieldAccount,
      password
    );

    loginSettingsPage.submit();
  });
});
