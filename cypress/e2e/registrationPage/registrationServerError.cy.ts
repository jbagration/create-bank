describe('reg error', () => {
    it('if server error 500, should contain error "Ошибка на сервере. Попробуйте позже"', () => {
        cy.visit('registration')
        cy.get('input[type="tel"]').type('9999999953')
        cy.get('[data-testid="modal"]').click()
        cy.get('input[type="checkbox"]').click()
        cy.get('button[type="submit"]').click()
        cy.intercept(
            'GET',
            'https://172.17.1.9:30101/api/v1/registration?mobilePhone=79999999953',
            { statusCode: 500 }
        ).as('error')
        cy.wait('@error')
        cy.get('[data-helpertext="true"]').should(
            'have.text',
            'Ошибка на сервере. Попробуйте позже'
        )
    })
})
