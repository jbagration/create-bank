describe('login page', () => {
    it('should have a content', () => {
        cy.visit('/login')
        cy.get('.MuiTypography-h3').should('have.text', 'Вход')
        cy.get('form').should('have.id', 'LoginForm')
        cy.get('input[type=tel]').should('have.value', '')
        cy.get('input[type=password]').should('have.value', '')
        cy.get('.MuiTabs-flexContainer > [tabindex="-1"]')
            .should('be.visible')
            .should('have.text', 'По паспорту')
            .click()
        cy.get('input[type=tel]').should('not.exist')
        cy.get('input[type=text]')
            .type('MR2417879')
            .should('have.value', 'MR2417879')
        cy.get('input[type=password]')
            .type('qpMc39zas')
            .should('have.value', 'qpMc39zas')
        cy.get('.css-1eukzsm-MuiButtonBase-root-MuiButton-root').should(
            'have.text',
            'Зарегистрироваться'
        )
        cy.get('button[type=submit]').should('have.text', 'Войти').click()
    })
})
