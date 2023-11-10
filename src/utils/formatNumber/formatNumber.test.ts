import { formatNumber } from './formatNumber'

describe('Format number with Intl.NumberFormat', () => {
    it('should call Intl.NumberFormat with correct parameters', () => {
        const spy = jest.spyOn(Intl, 'NumberFormat')

        expect(
            formatNumber(1, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
        ).toBe('1,00')
        expect(spy).toBeCalledWith('ru-RU', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    })
})
