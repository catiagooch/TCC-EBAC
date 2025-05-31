class CuponsAPI{

   

    listarCupons() {

        return cy.request({
            method: 'GET',
            url:'/wc/v3/coupons',
            headers: { authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy' }

        })
    }

    cadastrarCupons(dados) {

        return cy.request({
            method: 'POST',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
            headers:{
                authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            },
            body: dados,
            failOnStatusCode: false


        })
    }
}

export default new CuponsAPI();