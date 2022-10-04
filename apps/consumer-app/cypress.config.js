const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    specPattern: 'src/**/*.test.{js,jsx,ts,tsx}',
  },

  retries: {
    runMode: 2,
  },

  env: {

  },

  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  experimentalStudio: true,
  experimentalWebKitSupport: true,
  numTestsKeptInMemory: 5,
  requestTimeout: 30000,

  viewportWidth: 1440,
  viewportHeight: 900,

  e2e: {
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
