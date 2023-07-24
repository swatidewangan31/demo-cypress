const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Cypress Dashboard - AiSync Project
  projectId: "9nez1u",
  //viewport
  viewportHeight: 768,
  viewportWidth: 1280,
  //timeout
  defaultCommandTimeout: 10000,
  //retries
  retries: {openMode: 0, runMode: 3},
  //browser security
  chromeWebSecurity: false,
  //test videos
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
