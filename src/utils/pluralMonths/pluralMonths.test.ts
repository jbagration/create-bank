import { pluralMonths } from './pluralMonths'

describe('Return months in the plural form', () => {
    it('should substitute 1st form', () => {
        expect(pluralMonths(1)).toBe('1 месяц')
        expect(pluralMonths(21)).toBe('21 месяц')
    })
    it('should substitute 2nd form', () => {
        expect(pluralMonths(2)).toBe('2 месяца')
        expect(pluralMonths(22)).toBe('22 месяца')
    })
    it('should substitute 3rd form', () => {
        expect(pluralMonths(0)).toBe('0 месяцев')
        expect(pluralMonths(5)).toBe('5 месяцев')
        expect(pluralMonths(11)).toBe('11 месяцев')
        expect(pluralMonths(25)).toBe('25 месяцев')
    })
})
