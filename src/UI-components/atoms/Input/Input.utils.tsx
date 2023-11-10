import React from 'react'
import NumberFormat from 'react-number-format'

import { InputMaskType } from './Input.type'

export const countryCodeObject = {
    '7': 10,
    '375': 9,
}

const ruPhoneFormat = '(###) ### ####'
const byPhoneFormat = '(##) ### ####'

const smsMask = Array(6).fill('*')
const smsFormat = '######'

export const currentMask = (
    type: string,
    countryCode: keyof typeof countryCodeObject
) => {
    const length = countryCodeObject[countryCode]
    const phoneMask = Array(length).fill('X')

    if (type === 'tel') return phoneMask
    if (type === 'smsCode') return smsMask
}

export const currentFormat = (type: string, countryCode: string) => {
    const maskFormat = countryCode === '7' ? ruPhoneFormat : byPhoneFormat

    if (type === 'tel') return maskFormat
    if (type === 'smsCode') return smsFormat
}

export const NumberFormatCustom = React.forwardRef<NumberFormat<any>, any>(
    (props, ref) => {
        const {
            onChange,
            isFocused,
            name,
            type,
            id: countryCode,
            ...rest
        } = props

        const format = currentFormat(type, countryCode)
        const mask = currentMask(type, countryCode)

        return (
            <NumberFormat
                {...rest}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            value: values.value,
                            name,
                        },
                    })
                }}
                format={format}
                type={type}
                mask={mask}
                allowEmptyFormatting={isFocused}
            />
        )
    }
)

export const phoneInputMask: InputMaskType = (isFocused) => {
    return {
        inputComponent: NumberFormatCustom,
        componentsProps: {
            input: {
                isFocused,
            },
        },
    }
}

export const smsInputMask: InputMaskType = (isFocused) => {
    return {
        inputComponent: NumberFormatCustom,
        componentsProps: {
            input: {
                isFocused,
            },
        },
    }
}
