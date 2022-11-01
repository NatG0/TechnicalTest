const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "an8hj6",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
