/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        // Verificando se o texto está igual ao esperado
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('Preenche os campo obriga´torios e envia o formulário', function() {
        const text = "teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste"
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Lima')
        cy.get('#email').type('teste@teste.com')
        cy.get('#open-text-area').type(text, {delay: 0})
        cy.get('button[type="submit"]').click()

        // Pegando o elemento de classe "Success" e verificando se ele está visivel
        cy.get('.success').should('be.visible')
    }) 

    // Para isolar o teste criar como it.only() 
    it('Exibir mensagem de erro ao preencher um email inválido', function() {
        const text = "teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste"
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Lima')
        cy.get('#email').type('testeteste.com')
        cy.get('#open-text-area').type(text, {delay: 0})
        cy.get('button[type="submit"]').click()

        // Pegando o elemento de classe "error" e verificando se ele está visivel
        cy.get('.error').should('be.visible')
    }) 
  })
  