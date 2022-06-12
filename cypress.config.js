module.exports = {
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: "68buye",
  chromeWebSecurity: false,
  blockHosts: [],
  env: {
    baseUrl: "https://qa-task-web.ministryofprogramming.com",
    homeUrl: "https://qa-task-web.ministryofprogramming.com/events",
    email: "anel@test.com",
    password: "Test1234!",
    verificationCode: "9999",
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js",
      "**/regression/01_authentication/workspace.code-workspace",
    ],
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
};
