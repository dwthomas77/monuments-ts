import { defineConfig } from "cypress";
import webpackPreprocessor from "@cypress/webpack-preprocessor";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const options = {
        // send in the options from your webpack.config.js, so it works the same
        // as your app's code
        webpackOptions: require('../../webpack.config'),
        watchOptions: {},
      }
    },
  },
});
