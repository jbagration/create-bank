describe('forgot password page', () => {
    it('should have a content', () => {
        cy.visit('/login')
        cy.get('.css-7u4c2j > :nth-child(2)')
            .should('have.text', 'Забыли пароль?')
            .click()
        cy.get('.css-1r45mn7 > .MuiTypography-root').should(
            'have.text',
            'Восстановление пароля'
        )
        cy.get(
            '.MuiStep-root.Mui-completed > .MuiStepLabel-root > .MuiStepLabel-labelContainer'
        ).should('have.text', 'Введите номер паспорта')
        cy.get('#verifyPassportForm').should('be.visible')
        cy.get('button[type=button]').contains('Продолжить')
        cy.get('input[]').should('have.value', '').type('MR2417879')
    })
})
