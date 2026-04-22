
import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
  env: {
    username: 'Admin',
    password: 'admin123'
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts'
  }
});
