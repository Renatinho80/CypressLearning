describe("Produtos Page", () => {
  it("Validar que o produto aprensenta remover depois de ser adicionado", () => {
    cy.login("standard_user", "secret_sauce");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]', {
      timeout: 5000,
    }).click();
    cy.contains("Remove").should(
      "have.attr",
      "data-test",
      "remove-sauce-labs-backpack"
    );
  });

  it("Validar a quantidade do carrinho", () => {
    cy.login("standard_user", "secret_sauce");
    // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    // cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test*="add-to-cart"]')
      .should("be.visible")
      .click({ multiple: true });
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "6");
    cy.get('[data-test*="remove"]').should("have.length", 6);
  });
});
