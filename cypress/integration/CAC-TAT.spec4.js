/// <reference types="Cypress" />

describe('Central de atendimento TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })


    it('marca o tipo de atendimento "Feedback"', function(){
        // Selecionando o elemento que será marcado via name
        cy.get('input[name="atendimento-tat"]')
        // Marcando o elemento feedback
        .check('feedback')
        // Verificando que o elemento foi marcado
        .should('have.value', 'feedback')
    })

    it.only('marca o tipo de atendimento "Elogio"', function(){
        // Selecionando o elemento que será marcado via radio
        cy.get('input[name="atendimento-tat"][value="elogio"]')
        // Marcando o elemento feedback
        .check()
        // Verificando que o elemento foi marcado
        .should('have.value', 'elogio')
    })

    it.only('marca cada tipo de atendimento e validar check', function(){
        cy.get('input[name="atendimento-tat"][value="ajuda"]')
        .should('be.checked');

        cy.get('input[type="radio"]')
        .check('elogio')
        .should('be.checked')

        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('be.checked')
    })

})