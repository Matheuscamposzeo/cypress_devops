/// <reference types="cypress"/>

describe('TESTES_ENAD', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8888/enade/login.xhtml')
    })

    it('Teste deve entrar como professor', () => {

        cy.get('input:eq(1)').type('prof')
        cy.get('input:eq(2)').type('prof')
        cy.get('button:eq(0)').click()

        cy.get('center > h1').should('contain', 'Olá zeca.baleiro! Bem-vindo ao sistema do Simulado ENADE')
        cy.get('div[style="display: flex; justify-content: space-between"] > :nth-child(2)').should('contain', 'Professor')
    });

    it('Teste deve entrar como professor e criar uma questão', () => {

        cy.get('input:eq(1)').type('prof')
        cy.get('input:eq(2)').type('prof')
        cy.get('button:eq(0)').click()

        cy.get('.ui-submenu-link').click()
        cy.get('.ui-widget-content > :nth-child(4)').click()
        cy.get('.ui-button-text:eq(1)').click()
        cy.get('.ui-selectonemenu-trigger:eq(3)').click().type('d').click()
        cy.get('input:eq(47)').type('Descrição')
        cy.get('input:eq(48)').type('A')
        cy.get('input:eq(49)').type('B')
        cy.get('input:eq(50)').type('C')
        cy.get('input:eq(51)').type('D')
        cy.get('input:eq(52)').type('E')
        cy.get('input:eq(53)').type('F')
        cy.get('.ui-chkbox-box > .ui-chkbox-icon:eq(3)').click()
        cy.get('.ui-button-text:eq(2)').click()
    });

    it('Teste deve entrar como professor e fazer logoff', () => {

        cy.get('input:eq(1)').type('prof')
        cy.get('input:eq(2)').type('prof')
        cy.get('button:eq(0)').click()

        cy.get('center > h1').should('contain', 'Olá zeca.baleiro! Bem-vindo ao sistema do Simulado ENADE')
        cy.get('div[style="display: flex; justify-content: space-between"] > :nth-child(2)').should('contain', 'Professor')
        cy.get('.ui-button-text').click()
        cy.url('http://localhost:8888/enade/login.xhtml')

    });

    it('Teste deve entrar como Aluno', () => {

        cy.get('input:eq(1)').type('aluno1')
        cy.get('input:eq(2)').type('aluno1')
        cy.get('button:eq(0)').click()

        cy.get('center > h1').should('contain', 'Olá araujo! Bem-vindo ao sistema do Simulado ENADE')
        cy.get('div[style="display: flex; justify-content: space-between"] > :nth-child(2)').should('contain', 'Aluno')
    });

    it('Teste não deve conseguir entrar com login errado', () => {
        
        cy.get('input:eq(1)').type('aaaaaa')
        cy.get('input:eq(2)').type('aaaaaa')
        cy.get('button:eq(0)').click()

        cy.get('.ui-messages-error-summary').should('contain','E-mail ou senha inválidos!')
    });


});