/// <reference types="Cypress" />

describe('Central de atendimento TAT', function() {
    this.beforeEach(function(){
        cy.visit('./src/index.html')
    })


    it('marca ambos checkboxes, depois desmarca o último', function(){
        //Selecionando todos os elementos do tipo checkbox
        cy.get('input[type="checkbox"')
        //Checando todos os elementos
        .check()
        //selecionando o ultimo elemento
        .last()
        //realizando o uncheck
        .uncheck()
        //validando se o elemento realmente não está checado
        .should('not.be.checked')
        
        cy.get('input[type="checkbox"')
        .check()
        //selecionando o primeiro elemento
        .first()
        .uncheck()
        .should('not.be.checked')
    })

    it('seleciona um arquivo da pasta fixtures', function(){
        //Pegando o elemento pelo tipo "file" e id "file-upload"
        cy.get('input[type="file"]#file-upload')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        //validando o nome do arquivo que foi anexado
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('seleciona um arquivo simulando um drag-and-drop', function(){
        //Pegando o elemento pelo tipo "file" e id "file-upload"
        cy.get('input[type="file"]#file-upload')
        .should('not.have.value')
        //Selecionando um arquivo como se um usuário tivesse arrastado o arquivo para o campo
        .selectFile('./cypress/fixtures/example.json', { action:'drag-drop'})
        //validando o nome do arquivo que foi anexado
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        //Criando um alias do arquivo axample.js, com o nome "sampleFile"
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]#file-upload')   
        //Selecionando arquivo utilizando o aliás com @sampleFile 
        .selectFile('@sampleFile')
        .should(function($input){
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

})