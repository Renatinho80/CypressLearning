declare namespace Cypress {
    interface Chainable {
      login(login: string, senha: string): Chainable<void>;
    }
  }
  