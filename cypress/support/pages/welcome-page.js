import { commonTexts } from "../../constants/texts/welcome";

export class WelcomePage {
  visit() {
    let url = Cypress.env("baseUrl");
    cy.visit(url);
  }

  submit() {
    const button = cy.contains(commonTexts.buttonLogin);
    button.click();
  }
}
export default WelcomePage;
