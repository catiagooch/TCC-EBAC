// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// commands UI

import produtosPage from "./page-objects/produtos.page";

Cypress.Commands.add('adicionarProduto', (produto) => {
    produtosPage.selecionarProduto(produto.nome, produto.tamanho, produto.cor)
    produtosPage.addProdutoCarrinho()
})

/// commands API

import cuponsApi from "./page-objects-api/cupons.api";

Cypress.Commands.add('listarCupons', () => {
    return cuponsApi.listarCupons()
})

Cypress.Commands.add('cadastrarCupons', (cupom) => {
    return cuponsApi.cadastrarCupons(cupom)
})