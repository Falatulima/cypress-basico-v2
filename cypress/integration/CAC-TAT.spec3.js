/// <reference types="Cypress" />

describe('Central de atendimento ao cliente TAT', function() {
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('Seleciona um produto (youtube) por seu texto', function() {
        // Selecionando elemento(campo) com id "product"
        cy.get('#product')
            // Selecionando item do campo lista via texto
            .select('YouTube')
            // Selecionando item do campo lista via value
            .should('have.value', 'youtube')
    }) 

    it('Seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product')
        .select('Mentoria')
        .should('have.value', 'mentoria')
    })

    it('Seleciona um produto (Blog) por seu indice', function() {
        cy.get('#product')
        // Selecionando item do campo lista via indice
        .select(1)
        // Selecionando item do campo lista via value
        .should('have.value', 'blog')
    })

})