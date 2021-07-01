/// <reference types="cypress"/>

describe('TESTES_ENAD', () => {

    it(' Erro de controle para proteger primeiro teste de erro gerado pelo inicio do .env', () => {
        cy.visit('http://localhost:8888/enade/login.xhtml')
        cy.get('input:eq(1)').type('aluno1')
        cy.get('input:eq(2)').type('aluno1')
        cy.get('button:eq(0)').click()

        cy.get('center > h1').should('contain', 'Olá araujo! Bem-vindo ao sistema do Simulado ENADE')
    });

});