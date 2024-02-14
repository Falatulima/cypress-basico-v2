Cypress.Commands.add('fillMndatoryFieldsAndSubmit', function(){
    const text = "teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste"
        cy.get('#firstName').type('Matheus')
        cy.get('#lastName').type('Lima')
        cy.get('#email').type('teste@teste.com')
        cy.get('#open-text-area').type(text, {delay: 0})
        cy.get('button[type="submit"]').click()
})