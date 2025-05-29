class ProdutosPage {


    visitarUrl() {

        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    }

    selecionarProduto(nome, tamanho, cor) {

        cy.contains(nome).click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
    }

    addProdutoCarrinho() {
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new ProdutosPage()
