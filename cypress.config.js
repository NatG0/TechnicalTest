const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "sztsc3",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
