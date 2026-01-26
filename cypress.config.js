const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

// Cargar variables del .env local
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    video: false,

    baseUrl: process.env.CYPRESS_BASE_URL || 'http://example.com',

    env: {
      allure: true,
      BASE_URL: process.env.CYPRESS_BASE_URL,
      USER_VALID: process.env.CYPRESS_USER_VALID,
      PASSWORD_VALID: process.env.CYPRESS_PASSWORD_VALID,
      USER_LOCKED: process.env.CYPRESS_USER_LOCKED,
      PASSWORD_LOCKED: process.env.CYPRESS_PASSWORD_LOCKED
    },

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
