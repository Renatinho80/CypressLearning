Cypress.Commands.add('login', (login: string, senha: string) => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('[placeholder="Username"]').type(login);
  cy.get('[placeholder="Password"]').type(senha);
});

Cypress.Commands.add(
  'adicionarProdutos',
  (quantidade: number, produto: string[]) => {
    for (let i = 0; i < quantidade; i++) {
      cy.get(`[data-test="${produto[i]}"]`).click();
    }
  }
);
