const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    // clé API pour se connecter à mailSlurp
    MAILSLURP_API_KEY:
      "b688256c30b9403686ab93627f330f06882260497d5eee54713f6c58186337f6",
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 40000,
  responseTimeout: 40000,
  requestTimeout: 40000,
  projectId: "spnx21",
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
