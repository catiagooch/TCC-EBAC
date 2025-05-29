///<reference types="cypress" />

import produtosPage from "../support/page-objects/produtos.page";

const produtos = require('../fixtures/produtos.json')

describe('[US-0001] Adicionar item ao carrinho', () => {

beforeEach(() => {
    produtosPage.visitarUrl()
});


it('Deve adicionar 3 produtos diferentes ao carrinho', () => {

    cy.fixture('produtos').then((dados) => {
      cy.adicionarProduto(dados.produto1)
      cy.get('.woocommerce-message').should('contain', dados.produto1.name)
        .and('contain', 'foi adicionado no seu carrinho')
      cy.get('.breadcrumb > :nth-child(1) > a').click()

      cy.adicionarProduto(dados.produto2)
      cy.get('.woocommerce-message').should('contain', dados.produto2.name)
        .and('contain', 'foi adicionado no seu carrinho')
      cy.get('.breadcrumb > :nth-child(1) > a').click()

      cy.adicionarProduto(dados.produto3)
      cy.get('.woocommerce-message').should('contain', dados.produto3.name)
        .and('contain', 'foi adicionado no seu carrinho')


    })
})

})




