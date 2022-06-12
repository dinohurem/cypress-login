import { authTexts } from "../../constants/texts/auth";
import { commonTexts } from "../../constants/texts/common";
import Helper from "../../support/helper";
import HomePage from "../../support/pages/home-page";

const helper = new Helper();
const homePage = new HomePage();

const email = helper.getRandomEmail(3);
const name = helper.getUniqueString(3);
const password = helper.getRandomPassword(3);
const phone = helper.getRandomPhoneNumber();

describe("Registration", () => {
  before(() => {
    cy.register(email, name, password, phone);
  });

  it("should successfully register a user", () => {
    cy.log("Verifying phone verification modal...");
    cy.contains(authTexts.phoneVerifiedTitleText).should("have.length", 1);
    cy.contains(authTexts.phoneVerifiedContentText).should("have.length", 1);
    cy.contains(commonTexts.verifyConfirm).click();

    cy.log("Verifying home page url...");
    homePage.verifyUrl();
  });

  it("should successfully login with just registered user", () => {
    cy.loginWithoutSession(email, password);

    cy.log("Verifying home page url...");
    homePage.verifyUrl();
    homePage.verifyToken(commonTexts.token);
    homePage.verifyToken(commonTexts.refreshToken);
  });
});
