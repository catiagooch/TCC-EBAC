///<reference types="cypress" />

import produtosPage from "../support/page-objects/produtos.page";

describe('[US-0001] Adicionar item ao carrinho', () => {

  let dados;

  beforeEach(() => {
    // Carrega os dados da fixture
    cy.fixture('produtos').then((fixtureData) => {
      dados = fixtureData;
    });

    produtosPage.visitarUrl();
  });

  it('Deve adicionar 3 produtos diferentes ao carrinho', () => {
    produtosPage.selecionarProduto('Ariel Roll Sleeve Sweatshirt');

    cy.adicionarProduto(dados.produto1);
    cy.get('.product-block')
      .contains('Ariel Roll Sleeve Sweatshirt')
      .click();

    cy.adicionarProduto(dados.produto2);
    cy.get('.product-block').should('contain', dados.produto2.nome)
      .and('contain', 'foi adicionado no seu carrinho');

    cy.get('.breadcrumb > :nth-child(1) > a').click();

    cy.adicionarProduto(dados.produto3);
    cy.get('.product-block').should('contain', dados.produto3.nome)
      .and('contain', 'foi adicionado no seu carrinho');

    cy.cadastrarCupons(dados.novoCupom).then((response) => {
      cy.cadastrarCupons().then((response) => {
        cy.log(JSON.stringify(response.body));
        expect(response.status).to.equal(200);
      });
      
      
  });

});
});