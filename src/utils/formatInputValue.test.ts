import {
    addZeroToValueOnBlur,
    formatInputValueAfterComma,
    formatInputValueToDigits,
    formatSumInputValue,
    formatSumInputValueNoSpacings,
    formatSumInputValueToDecimal,
    formatSumInputValueToInteger,
} from './formatInputValue'

describe('test formatInputValueToDigits utilit', () => {
    it('should return string with numbers or empty string', () => {
        expect(formatInputValueToDigits('34bs')).toBe('34')
    })
    it('if input value is number - return number', () => {
        expect(formatInputValueToDigits(110)).toBe(110)
    })
    it('if', () => {
        expect(formatInputValueToDigits('$%@')).toBe('')
    })
})

describe('test formatInputValueAfterComma utilit', () => {
    it('if last symbol coma - return value + 00', () => {
        expect(formatInputValueAfterComma('1,')).toBe('1,00')
    })
    it('if after coma one symbol - return value + 0', () => {
        expect(formatInputValueAfterComma('1,0')).toBe('1,00')
    })
})

describe('test formatSumInputValue utilit', () => {
    it('should return value according to the options', () => {
        expect(formatSumInputValue('abc12.34')).toBe('12,34')
        expect(
            formatSumInputValue('abc12.34111111111', {
                mayBeZero: false,
                lengthBeforeComma: 10,
                lengthAfterComma: 3,
            })
        ).toBe('12,341')
        expect(formatSumInputValue('abc0/12b3c')).toBe('0 123')
    })
})

describe('test formatSumInputValueToInteger utilit', () => {
    it('should format the sum to an integer', () => {
        expect(formatSumInputValueToInteger('12345')).toBe('12 345')
        expect(formatSumInputValueToInteger('0235')).toBe('235')
    })
})

describe('test formatSumInputValueToDecimal utilit', () => {
    it('should replace comma with dot', () => {
        expect(formatSumInputValueToDecimal('123,45')).toBe('123.45')
        expect(formatSumInputValueToDecimal('100,000,000')).toBe('100.000.000')
    })
})

describe('test formatSumInputValueNoSpacings utilit', () => {
    it('should do numbers without spaces', () => {
        expect(formatSumInputValueNoSpacings('1 234 567')).toBe('1234567')
        expect(formatSumInputValueNoSpacings('abc100,000,000')).toBe(
            '100000000'
        )
    })
})

describe('test addZeroToValueOnBlur utilit', () => {
    it('should return an empty string if input is empty', () => {
        expect(addZeroToValueOnBlur('')).toBe('')
        expect(addZeroToValueOnBlur('123,')).toBe('123,00')
        expect(addZeroToValueOnBlur('123,0')).toBe('123,00')
    })
})
