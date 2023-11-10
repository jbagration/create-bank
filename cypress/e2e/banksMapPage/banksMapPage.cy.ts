describe('login page', () => {
    it('should have a links and content', () => {
        cy.visit('/login')
        cy.get('[data-testid="/bank_branch-link"]')
            .should('have.text', 'Банкоматы и отделения')
            .click()
        cy.get('[data-testid="modal-cookie-consent"]').should('be.visible')
        cy.get('[data-testid="modal-region-title"]').should(
            'have.text',
            'Ваш регион'
        )
        cy.get('[data-testid="city-change-button"]')
            .should('have.text', 'Нет, изменить')
            .click()
        cy.get('[data-testid="modal-search-city"]').should('be.visible')
        cy.get('[data-testid="modal-search-city-input"]').should(
            'have.value',
            ''
        )
        cy.get('input[placeholder*="Введите название города"]').type(
            'Москва {Enter}'
        )
        cy.get('input[placeholder*="Поиск по адресу"]')
            .should('have.value', '')
            .type('Образцова {Enter}')
        cy.get('[data-testid="branch-address"]').should('be.visible').click()
        cy.get('[data-testid="timetable-bank-branch"]').should('be.visible')
    })
})
