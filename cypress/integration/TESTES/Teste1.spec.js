/// <reference types="cypress"/>
import loc from '../../support/locators'

describe('0_ERRO_DE_CONTROLE', () => {

    before(() => {
    });

    beforeEach(() => {

    });

    after(() => {

    });

    describe('Erro de controle', () => {

        it(' Erro de controle para proteger primeiro teste de erro gerado pelo inicio do .env', () => {
            cy.visit('http://localhost:8888/enade/login.xhtml')
            cy.get(loc.LOGIN.USER).type('aluno1')
            cy.get(loc.LOGIN.PASSWORD).type('aluno1')
            cy.get(loc.LOGIN.BTN_LOGIN).click()

            cy.get('center > h1').should('contain', 'Olá araujo! Bem-vindo ao sistema do Simulado ENADE')
        });

    });

});