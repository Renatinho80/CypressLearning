declare namespace Cypress {
  interface Chainable {
    login(login: string, senha: string): Chainable<void>;
  }
}

declare namespace Cypress {
  interface Chainable {
    adicionarProdutos(quantidade: number, produto: string[]): Chainable<void>;
  }
}
