const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/wp-json',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



