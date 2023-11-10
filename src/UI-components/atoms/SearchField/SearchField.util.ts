import {
    searchFieldTooLongMessage,
    searchFieldTooShortMessage,
} from './SearchField.const'

const searchFieldTooLong = (value: string) => value.length > 50
const searchFieldTooShort = (value: string) => value.length < 3 && value !== ''

export const searchFieldHasError = (value: string) =>
    searchFieldTooLong(value) || searchFieldTooShort(value)

export const getErrorMessage = (value: string) => {
    switch (true) {
        case searchFieldTooLong(value):
            return searchFieldTooLongMessage
        case searchFieldTooShort(value):
            return searchFieldTooShortMessage
        default:
            return ''
    }
}
