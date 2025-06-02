///<reference types="cypress" />

describe('API de Cupons', () => {
    it('Listar os cupons cadastrados', () => {
      cy.listarCupons().should((response) => {
        expect(response.status).to.equal(200);
      })
    })
  
    it('Cadastrar cupom dinâmico', () => {

        const cupomDinamico = `Cupom${Date.now()}`;
       
        const novoCupom = {
       
         code: cupomDinamico,
         amount: "10",
         discount_type: "fixed_product",
         description: "cupom gerado dinamicamente"
       
        };
    it('Cadastrar cupom com sucesso', () => {
      
        cy.cadastrarCupons(novoCupom).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body.code).to.equal(codigoDinamico);
          
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