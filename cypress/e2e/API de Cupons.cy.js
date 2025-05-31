///<reference types="cypress" />

describe('API de Cupons', () => {
    it('Listar os cupons cadastrados', () => {
      cy.listarCupons().should((response) => {
        expect(response.status).to.equal(200);
      })
    })
  
    it.only('Cadastrar cupom com sucesso', () => {
      cy.fixture('cupons').then((dados) => {
        cy.cadastrarCupons(dados.novoCupom).then((response) => {
          expect(response.status).to.equal(200);
          
        })
      })
    })
  
    it('Não permitir cadastrar cupom com nome repetido', () => {
      cy.fixture('cupons').then((dados) => {
        cy.cadastrarCupons(dados.cupomRepetido).then((response) => {
          expect(response.status).to.equal(400);
          
        })
      })
    })
  })
  