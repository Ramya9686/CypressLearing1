const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    //baseUrl : '',
    viewportHeight: 1000,
    viewportHeight: 660,

    // defaultCommandTimeout: 120000,
    // pageLoadTimeout: 60000,
    retries: { 'runMode': 1, 'openMode': 2 },
    video: true,
    screenshot: true,

    env: {
      'clientUrl': '',
      'username': 'Admin',
      'password': 'admin123'
    },

    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
