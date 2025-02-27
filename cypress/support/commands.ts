Cypress.Commands.add("login", (login: string, senha: string) => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[placeholder="Username"]').type(login);
    cy.get('[placeholder="Password"]').type(senha);
    cy.contains("Login").click();
  });
  