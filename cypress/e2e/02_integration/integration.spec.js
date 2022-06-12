import { authRequests } from "../../constants/requests/auth";
import Helper from "../../support/helper";

const helper = new Helper();
const domain = Cypress.env("domainUrl");
const email = Cypress.env("email");
const password = Cypress.env("password");

describe("API tests", () => {
  it("should successfully login", () => {
    cy.log("Logging in with existing user...");
    cy.request({
      method: "POST",
      url: domain + authRequests.loginEndpoint,
      headers: {
        "Content-Type": "application/json;",
      },
      body: {
        email: email,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.be.true;
      expect(response.body.error).to.be.null;
      expect(response.body.data.accessToken).to.exist;
      expect(response.body.data.refreshToken).to.exist;
    });
  });

  it("should successfully register a user and login with it", () => {
    cy.log("Getting needed data...");
    const randomEmail = helper.getRandomEmail(3);
    const name = helper.getUniqueString(3);
    const randomPassword = helper.getRandomPassword(3);
    const phone = helper.getRandomPhoneNumber();

    cy.log("Registering user...");
    cy.request({
      method: "POST",
      url: domain + authRequests.registerEndpoint,
      headers: {
        "Content-Type": "application/json;",
      },
      body: {
        email: randomEmail,
        name: name,
        password: randomPassword,
        phoneNumber: phone,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.be.true;
      expect(response.body.error).to.be.null;
      expect(response.body.data.accessToken).to.exist;
      expect(response.body.data.refreshToken).to.exist;

      cy.log("Logging in with registered user...");
      cy.request({
        method: "POST",
        url: domain + authRequests.loginEndpoint,
        headers: {
          "Content-Type": "application/json;",
        },
        body: {
          email: randomEmail,
          password: randomPassword,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.success).to.be.true;
        expect(response.body.error).to.be.null;
        expect(response.body.data.accessToken).to.exist;
        expect(response.body.data.refreshToken).to.exist;
      });
    });
  });

  it("should successfully edit user info", () => {
    cy.log("Getting needed data...");
    const address = helper.getUniqueString(2);

    const name = helper.getUniqueString(3);

    cy.log("Logging in with an existing user for token...");
    cy.request({
      method: "POST",
      url: domain + authRequests.loginEndpoint,
      headers: {
        "Content-Type": "application/json;",
      },
      body: {
        email: email,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      let authorization = "bearer " + response.body.data.accessToken;
      cy.log("Updating user info using the beared token...");
      cy.request({
        method: "PUT",
        url: domain + authRequests.updateUserEndpoint,
        headers: {
          "Content-Type": "application/json;",
          authorization,
        },
        body: {
          address: address,
          name: name,
        },
      }).then((response) => {
        expect(response.status).to.eq(202);
      });
    });
  });

  it("should successfully edit user password", () => {
    cy.log("Getting needed data...");
    const newPassword = helper.getRandomPassword(3);

    cy.log("Logging in with an existing user for token...");
    cy.request({
      method: "POST",
      url: domain + authRequests.loginEndpoint,
      headers: {
        "Content-Type": "application/json;",
      },
      body: {
        email: email,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      let authorization = "bearer " + response.body.data.accessToken;
      cy.log("Updating user password using the beared token...");
      cy.request({
        method: "POST",
        url: domain + authRequests.changePasswordEndpoint,
        headers: {
          "Content-Type": "application/json;",
          authorization,
        },
        body: {
          newPassword: newPassword,
          password: password,
        },
      }).then((response) => {
        expect(response.status).to.eq(202);

        cy.log(
          "Updating user password back to original password using the beared token..."
        );
        cy.request({
          method: "POST",
          url: domain + authRequests.changePasswordEndpoint,
          headers: {
            "Content-Type": "application/json;",
            authorization,
          },
          body: {
            newPassword: password,
            password: newPassword,
          },
        }).then((response) => {
          expect(response.status).to.eq(202);
          expect(response.body.success).to.be.true;
          expect(response.body.error).to.be.null;
        });
      });
    });
  });
});
