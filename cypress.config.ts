import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    baseUrl: 'https://www.saucedemo.com/',
  },
})