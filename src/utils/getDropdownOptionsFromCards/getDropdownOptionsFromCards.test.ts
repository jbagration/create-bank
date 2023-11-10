import { getDropdownOptionsFromCards } from './getDropdownOptionsFromCards'

const testArrays = {
    invalid: {
        input: [{}],
        output: [{ '': '', text: '', divider: true }],
    },
    valid: {
        input: [
            {
                cardNumber: '123',
                cardName: 'test',
                balance: 1,
                currencyCode: 'RUB',
            },
        ],
        output: [
            {
                '****123 test, 1,00 RUB': '123',
                text: '****123 test, 1,00 RUB',
                divider: true,
            },
        ],
    },
}

describe('Create an array of options for the dropdown menu from an array of cards', () => {
    it('should return empty array if cards is empty', () => {
        expect(getDropdownOptionsFromCards([])).toEqual([])
    })

    it('should return the correct array of options', () => {
        expect(getDropdownOptionsFromCards(testArrays.invalid.input)).toEqual(
            testArrays.invalid.output
        )
        expect(getDropdownOptionsFromCards(testArrays.valid.input)).toEqual(
            testArrays.valid.output
        )
    })
})
