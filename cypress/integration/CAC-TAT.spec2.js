/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        // Verificando se o texto está igual ao esperado
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

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

    it('Exibir mensagem de erro telefone obrigatório', function() {
        const text = "teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste"
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Lima')
        cy.get('#email').type('teste@teste.com')
        cy.get('input[id="phone-checkbox"]').check();
        cy.get('#open-text-area').type(text, {delay: 0})
        cy.get('button[type="submit"]').click()

        // Pegando o elemento de classe "error" e verificando se ele está visivel
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName').type('Matheus').should('have.value', 'Matheus')
        cy.get('#lastName').type('Lima').should('have.value', 'Lima')
        cy.get('#email').type('teste@teste.com').should('have.value', 'teste@teste.com')

        cy.get('#firstName').clear().should('have.value', '')
        cy.get('#lastName').clear().should('have.value', '')
        cy.get('#email').clear().should('have.value', '')
    })

    it('Prencher todos os campos obrigatórios do formulário e clicar no enviar', function() {
        // comando criado no diretório cypress/support/commands.js 
        cy.fillMndatoryFieldsAndSubmit()
        
        // Pegando o elemento de classe "Success" e verificando se ele está visivel
        cy.get('.success').should('be.visible')
    })
    
    // Para Executar apenas esse teste, devo criar como it.only()
    it.only('Preenche os campo obriga´torios e envia o formulário', function() {
        const text = "teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste"
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Lima')
        cy.get('#email').type('teste@teste.com')
        cy.get('#open-text-area').type(text, {delay: 0})
        // Caso só tenha um elemento que contem "Enviar", pode ser escrito desta forma cy.contains('Enviar').click();
        cy.contains('button', 'Enviar').click();

        // Selecionando o elemento de classe "Success" e verificando se ele está visivel
        cy.get('.success').should('be.visible')
    }) 

  })
  