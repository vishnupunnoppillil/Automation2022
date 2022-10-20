const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    reporter:"mochawesome",
    reporterOptions:{
charts:true,
overwrite:false,
html:false,
json:true,
reportDir:"cypress/reports",
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
