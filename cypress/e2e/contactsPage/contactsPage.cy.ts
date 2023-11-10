describe('login page', () => {
    it('should have a links and content', () => {
        cy.visit('/login')
        cy.get('[data-testid="/contact-link"]')
            .should('have.text', 'Контакты')
            .click()
        cy.get('[data-testid="contact-page-title"]').should(
            'have.text',
            'Телефоны Контакт-центра'
        )
        cy.get('[data-testid="contact-center-block"]').should(
            'have.text',
            'Для физических лиц'
        )
        cy.get('[data-testid="contact-center-description"]').should(
            'have.text',
            'Рекомендации по продукту, информация о счете и транзакциях'
        )
        cy.get('[data-testid="contact-center-workTime"]').should(
            'have.text',
            'Ежедневно с 8:00 до 20:00'
        )
        cy.get('[data-testid="contact-info"]').children().first().contains(3700)
        cy.get('[data-testid="contact-info"]')
            .children()
            .first()
            .contains('Бесплатные звонки по Росcии')
        cy.get('[data-testid="contact-info"]')
            .children()
            .next()
            .contains('+7 (684) 654-01-02')
        cy.get('[data-testid="contact-info"]')
            .children()
            .next()
            .contains('Международные звонки')
        cy.get('[data-testid="contact-info"]')
            .children()
            .next()
            .contains('info@createbank.ru')
        cy.get('[data-testid="contact-info"]')
            .children()
            .next()
            .contains('E-mail address')
        cy.get('[data-testid="contact-info"]')
            .children()
            .next()
            .contains('г. Москва, ул.Московская, 2, 07100')
        cy.get('[data-testid="contact-info"]')
            .children()
            .next()
            .contains('Main office address')
        cy.get('[data-testid="contact-social-media"]').contains(
            'Социальные сети и мессенджеры'
        )
        cy.get('[data-testid="contact-back-button"]')
            .should('have.text', 'Назад')
            .click()
    })
})
