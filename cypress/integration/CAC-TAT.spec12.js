/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    //Variável para armazenar o valor para o tick
    const THREE_SECONDS_IN_MS = 3000
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })

    //Executar o teste tres vezes
    Cypress._.times(3, function() {
    it('Utilizando times para executar o teste 3 vezes', function() {
        // Verificando se o texto está igual ao esperado
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        })
    }) 
    
    it('Utilizando .clock e .tick para aguardar elemento desaparecer', function() {
        const text = "teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste"
        //para paralizar o relógio do navegador
        cy.clock()
        
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Lima')
        cy.get('#email').type('teste@teste.com')
        cy.get('#open-text-area').type(text, {delay: 0})
        cy.get('button[type="submit"]').click()

        // Pegando o elemento de classe "Success" e verificando se ele está visivel
        cy.get('.success').should('be.visible')
        //para aguardar segundos determinados
        cy.tick(3000)
        //Verficando se o success não está mais visível
        cy.get('.success').should('not.be.visible')
        
    })


    // Para isolar o teste criar como it.only() 
    it('Utilizando o repeat para excrever várias vezes a palava teste', function() {
        //Utilizando o repeat para excrever várias vezes a palava teste
        const longtext = Cypress._.repeat('teste ', 40)
        cy.clock()
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Lima')
        cy.get('#email').type('testeteste.com')
        cy.get('#open-text-area').type(longtext, {delay: 0})
        cy.get('button[type="submit"]').click()

        // Pegando o elemento de classe "error" e verificando se ele está visivel
        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        //Verficando se o error não está mais visível
        cy.get('.error').should('not.be.visible')
    }) 

    it('Exibe e esconde mensagem de sucesso e erro usando invoke', function() {
        cy.get('.success')
        .should('not.be.visible')
        //Apresentando o a mensagem de sucesso
        .invoke('show')
        .should('be.visible')
        //validando se o elemento success contem a mensagem
        .and('contain','Mensagem enviada com sucesso.')
        //Escondendo a mensagem de sucesso
        .invoke('hide')
        .should('not.be.visible')
        cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Valide os campos obrigatórios!')
        .invoke('hide')
        .should('not.be.visible')
    })

    it('Preenche campo texto utilizando o invoke', function() {
        const longtext = Cypress._.repeat('Testando o invoke ', 20) 
        cy.get('textarea')
        //Utilizando o invoke para setar o valor da variável longtext
        .invoke('val', longtext)
        //Validando se o campo texto contém o valor da variável longtext
        .should('have.value', longtext)
    })

    it('testando o request', function() {
        cy.request('ttps://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        .should(function(response) { // criando uma function para "pegar" o response retornado na request
            const{ status, statusText} = response //Pegando os respectivos valores do response
            expect(status).to.equal(200) // validando se o status é igual a 200
            expect(statusText).to.equal('OK') // validando se o statusText pe igual a ok
            //expect(body).to.include('CAC TAT') //Validando se "CAC TAT" está incluido no body
        })
    })

    it.only('Encontre o gato', function() {
        cy.get('#cat')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        cy.get('#title')
        .invoke('text', 'Encontrando o gato')   //Utilizando o invoke para sobrescrever o titulo da pagina

    })
  })
  