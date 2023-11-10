import { FormatInputValueType } from 'src/types/utilsTypes'

import { NUMBER_FORMAT } from './validationRules'

export const formatInputValueToDigits = (
    inputValue: string | number
): string | number => {
    if (typeof inputValue === 'number') {
        return inputValue
    }

    return inputValue.replace(/\D/g, '')
}

export const formatInputValueAfterComma = (value: string) => {
    if (/.*\d+,\d$/.test(value)) return `${value}0`
    if (/.*\d+,$/.test(value)) return `${value}00`
    if (value.length !== 0 && !value.includes(',')) return `${value},00`

    return value
}

export const formatCardNumberInput = (inputValue: string) => {
    const cleanedValue = inputValue.replace(/\D/g, '')
    const blocks = cleanedValue.match(/.{1,4}/g)

    if (blocks) {
        return blocks.join('-')
    }
    return cleanedValue
}

export const formatSumInputValue = (
    inputValue: string,
    {
        mayBeZero = false,
        lengthBeforeComma = 10,
        lengthAfterComma = 2,
    }: FormatInputValueType = {}
): string => {
    if (mayBeZero ? /^[.,]/.test(inputValue) : /^[0.,]/.test(inputValue)) {
        return inputValue.slice(1)
    }

    const formattedValue = inputValue
        .replace(/\./g, ',')
        .replace(/[^0-9,]/g, '')

    if (/[,].*[,]/.test(formattedValue)) {
        return formattedValue.slice(0, -1).replace(NUMBER_FORMAT, ' ')
    }

    const commaIndex = formattedValue.indexOf(',')
    const isCommaExist = commaIndex !== -1

    if (isCommaExist) {
        const valueBeforeComma = formattedValue.slice(0, commaIndex)
        const valueAfterComma = formattedValue.slice(commaIndex + 1)
        const slicedValueBeforeComma = valueBeforeComma.slice(
            0,
            lengthBeforeComma
        )
        const slicedValueAfterComma = valueAfterComma.slice(0, lengthAfterComma)
        return `${slicedValueBeforeComma},${slicedValueAfterComma}`.replace(
            NUMBER_FORMAT,
            ' '
        )
    }

    return formattedValue
        .slice(0, lengthBeforeComma)
        .replace(NUMBER_FORMAT, ' ')
}

export const formatSumInputValueToInteger = (inputValue: string | number) => {
    if (typeof inputValue === 'number') {
        return inputValue.toLocaleString('ru-RU')
    }

    if (/^0/.test(inputValue)) {
        return inputValue.slice(1)
    }

    return inputValue.replace(/[^0-9]/g, '').replace(NUMBER_FORMAT, ' ')
}

export const formatSumInputValueToDecimal = (inputValue: string) => {
    return inputValue.replace(/[^0-9,]/g, '').replace(/,/g, '.')
}

export const formatSumInputValueNoSpacings = (inputValue: string) => {
    return inputValue.replace(/[^0-9]/g, '')
}

export const addZeroToValueOnBlur = (value: string) => {
    if (!value) {
        return value
    }
    if (value.at(-1) === ',') {
        return `${value}00`
    }
    const separator = value.indexOf(',')
    const after = value.slice(separator + 1)
    if (value.includes(',') && after.length < 2) {
        return `${value}0`
    }
    return value
}
