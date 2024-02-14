/// <reference types="Cypress" />

describe('Central de atendimento ao cliente TAT', function() {
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })

  it('verifica que politica de privacidade abre em outra aba sem a necessidade de um clique', function() {
    //pegando elemento de id "privacy" do tipo a 
    cy.get('#privacy a')
    //verifica se o elemento tem o attr(atributo )target com o valor "_blank". Sendo assim vai abrir em outra aba
    .should('have.attr', 'target', '_blank')
  })

  it.only('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
    cy.get('#privacy a')
    //remove o atributo target
    .invoke('removeAttr', 'target')
    .click()
    //Verificando se o titulo está visivel para certificar que a página foi redirecionada 
    cy.get('#title').contains('Política de privacidade').should('be.visible')
    // redirecionando para o index
    cy.visit('./src/index.html')
    //verificando se o subtitulo está visível para certificar que a página foi redirecionada 
    cy.get('#subtitle').contains('Forneça o máximo de informações, por favor.').should('be.visible')
  })

})