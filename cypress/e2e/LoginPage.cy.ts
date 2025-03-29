describe('Login Page', () => {
  it('Logar sem adicionar usuario e senha', () => {
    cy.login('', '');
    cy.contains('Login').click();
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Username is required'
    );
  });

  it('Logar adicionando somente o usuario', () => {
    cy.login('standard_user', '');
    cy.contains('Login').click();
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Password is required'
    );
  });

  it('Logar adicionando somente a senha', () => {
    cy.login('', 'Password');
    cy.contains('Login').click();
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Username is required'
    );
  });

  it('Logar com usuario e senha incorretos', () => {
    cy.login('1234', '1234');
    cy.contains('Login').click();

    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Username and password do not match any user in this service'
    );
  });

  it('Validar que login redireciona para página de produtos', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.contains('Login').click();
    cy.url().should('include', 'inventory.html');
  });
});
