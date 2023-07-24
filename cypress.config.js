const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Cypress Dashboard - AiSync Project
  projectId: "cb13ro",
  //viewport
  // viewportHeight: 768,
  // viewportWidth: 1280,
  //timeout
  defaultCommandTimeout: 10000,
  //retries
  retries: {openMode: 0, runMode: 1},
 
  //test videos
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
