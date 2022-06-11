# dino-tests

Repo for automated testing of PO system using Cypress.

Prerequisites:

- Node.js installed (12 or 14 and above)
  - Added successfully to User and System path variables (for Windows)
- npm version above v5.2 (for npx)

To quickly have the automation framework up and running, follow these steps:

1. Open Command line Prompt on Windows (or Terminal on MacOS)
2. Navigate to the root folder in your terminal (should contain `package.json` file and other folders above)
3. Install Cypress and other package dependencies by typing the following in your terminal: `npm install`
4. After successful installation, type the following in your terminal(usually done through the terminal in VS Code) to run the Cypress Test Runner: `npx cypress open`
   - If not done automatically, you might have to carry out Cypress verification by typing the following command: `npx cypress verify`

### Framework

The pattern used in the framework is called Page Object Model (POM).
Some of the benefits of this approach are:

- reusability - same page class can be used for different tests and all locators are reused accross multiple test cases
- maintability - a clean separation exists between test code and locators

### Cypress Dashboard

We use [Cypress Dashboard](https://www.cypress.io/dashboard/) for running the automation tests as a part of release regression.
A command was added to the `package.json` file in order to record the run on dashboard: `cy:record`.
