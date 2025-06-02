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
    produtosPage.selecionarProduto(
      dados.produto1.nome,
      dados.produto1.tamanho,
      dados.produto1.cor
  );
  produtosPage.addProdutoCarrinho();

  cy.get('.woocommerce-message')
    .should('contain', 'foi adicionado no seu carrinho');

  cy.visit('http://lojaebac.ebaconline.art.br/produtos/');


  produtosPage.selecionarProduto(
    dados.produto2.nome,
    dados.produto2.tamanho,
    dados.produto2.cor
  );
  produtosPage.addProdutoCarrinho();

  cy.get('.woocommerce-message')
    .should('contain', 'foi adicionado no seu carrinho');

  cy.visit('http://lojaebac.ebaconline.art.br/produtos/');

  produtosPage.selecionarProduto(
    dados.produto3.nome,
    dados.produto3.tamanho,
    dados.produto3.cor
  );
  produtosPage.addProdutoCarrinho();

  cy.get('.woocommerce-message')
    .should('contain', 'foi adicionado no seu carrinho');
 })
})