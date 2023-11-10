import { getCardLabel } from './getCardLabel'

describe('Create card label from the passed parameters', () => {
    it('should correctly process inappropriate inputs', () => {
        expect(getCardLabel({})).toBe('')
        expect(
            getCardLabel({
                cardNumber: '',
                cardName: '',
                currencyCode: '',
            })
        ).toBe('')
    })

    it('should return correct card label', () => {
        expect(
            getCardLabel({
                cardNumber: '123',
                cardName: 'test',
                cardBalance: 1,
                currencyCode: 'RUB',
            })
        ).toBe('****123 test, 1,00 RUB')
    })
})
