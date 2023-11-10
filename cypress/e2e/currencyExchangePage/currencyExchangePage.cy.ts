describe('currency exchange content', () => {
    it('should have a links and content', () => {
        cy.visit('/login')
        cy.get('[data-testid="/exchange_rate-link"]')
            .should('have.text', 'Курсы валют')
            .click()
        cy.get('[data-testid="exchange-rates-table-title"]').should(
            'have.text',
            'Курсы Валют'
        )
        cy.get('[data-testid="exchange-rates-table-table"]')
            .children()
            .first()
            .should('have.text', 'Валюта')
        cy.get('[data-testid="exchange-rates-table-table"]')
            .children()
            .next()
            .contains('Покупка')
        cy.get('[data-testid="exchange-rates-table-table"]')
            .children()
            .next()
            .contains('Продажа')
        cy.get('[data-testid="currency-converter-title"]').should(
            'have.text',
            'Конвертер Валют'
        )
        cy.get('[data-testid="footer-item"]').should('be.visible')
        cy.get('[data-testid="footer-item"]').contains('Поддержка карт')
        cy.get('[data-testid="footer-item"]').contains('Для физических лиц')
        cy.get('[data-testid="footer-contacts"]').contains('3800')
        cy.get('[data-testid="footer-contacts"]').contains('+7 (684) 654-01-02')
        cy.get('[data-testid="exchange-back-button"]')
            .should('have.text', 'Назад')
            .click()
    })
})
