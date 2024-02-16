/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    //Variável para armazenar o valor para o tick
    const THREE_SECONDS_IN_MS = 3000
    //beforeEach executa tudo o que está dentro antes
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        // Verificando se o texto está igual ao esperado
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it.only('Preenche os campo obrigatórios e envia o formulário', function() {
        const text = "teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste"
       //Para congelar o relógio do navegador
        cy.clock()
       
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Lima')
        cy.get('#email').type('teste@teste.com')
        cy.get('#open-text-area').type(text, {delay: 0})
        cy.get('button[type="submit"]').click()

        //verificando se o elemento de classe "Success" está visivel
        cy.get('.success').should('be.visible')
        //aguardando segundos para que o .success possa desaparecer
        cy.tick(3000)
        // verificando se o elemento de classe "success" não está mais visível
        cy.get('.success').should('not.be.visible')

    }) 


        
  })
  