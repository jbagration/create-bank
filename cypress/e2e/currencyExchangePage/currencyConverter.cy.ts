interface CurrencyItem {
    buyingRate: number
    charCode: string
    name: string
    nominal: number
    sellingRate: number
}

describe('currency converter', () => {
    it('must verify that the currency converter is working correctly', () => {
        cy.visit('/login')
        cy.get('[data-testid="/exchange_rate-link"]')
            .should('have.text', 'Курсы валют')
            .click()
        cy.get('[data-testid="currency-converter-select"]').contains('Евро')
        cy.get('[data-testid="currency-converter-select"]').contains('Рубль')
        cy.get('input[name="Хочу приобрести"]').type('1000 {Enter}')
        cy.request('https://172.17.1.9:30101/api/v1/exchange-rates').then(
            (response) => {
                const res = JSON.parse(JSON.stringify(response))
                const { body } = res

                const currencyItem = body.filter(
                    (item: CurrencyItem) => item.name === 'Евро'
                )
                const buyingRate = (11000 / currencyItem[0].buyingRate)
                    .toFixed(2)
                    .replace('.', ',')

                const sellingRate = currencyItem[0].sellingRate
                    .toFixed(2)
                    .replace('.', ',')

                cy.get('input[name="Необходимая сумма"]').should(
                    'have.value',
                    buyingRate
                )

                cy.get('[data-testid="switch-currency"]').click()
                cy.get('input[name="Хочу приобрести"]').should(
                    'have.value',
                    '1'
                )
                cy.get('input[name="Необходимая сумма"]').should(
                    'have.value',
                    sellingRate
                )
            }
        )
    })
})
