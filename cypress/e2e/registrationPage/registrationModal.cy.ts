describe('registrtion modal test. phone number validation. 000-899 or 907, 940, 942-949, 957, 959, 972-976, 979, 990, 998 is not valid. BR VALID CODES [25, 29, 33, 44]', () => {
    it('test input 9985557755, should contain error "Некорректный номер телефона"', () => {
        cy.visit('registration')
        cy.get('input[type="tel"]').type('9985557755')
        cy.get('[data-testid="modal"]').click()
        cy.get('[data-helpertext="true"]').should(
            'have.text',
            'Некорректный номер телефона'
        )
    })
    it('test input 0104443322, should contain error "Некорректный номер телефона"', () => {
        cy.visit('registration')
        cy.get('input[type="tel"]').type('0104443322')
        cy.get('[data-testid="modal"]').click()
        cy.get('[data-helpertext="true"]').should(
            'have.text',
            'Некорректный номер телефона'
        )
    })
    it('test RB region input 210444332, should contain error "Некорректный номер телефона"', () => {
        cy.visit('registration')
        cy.get('[data-testid="RU"]').click()
        cy.get('[data-testid="option-BY"]').click()
        cy.get('input[type="tel"]').type('210444332')
        cy.get('[data-testid="modal"]').click()
        cy.get('[data-helpertext="true"]').should(
            'have.text',
            'Некорректный номер телефона'
        )
    })
})
