import * as yup from 'yup'

import {
    bothFilesLimitText,
    charactersLimitSecurityQuestion,
    emptyLastNameMessage,
    emptyNameMessage,
    fieldRequired,
    fileErrorLimitText,
    fileInvalidFormat,
    fileRequired,
    forbiddenSymbolsErrorMessage,
    invalidCodeErrorMessage,
    invalidInternetAccountNumberMessage,
    invalidUtilitiesAccountNumberMessage,
    maxCombinedFileSize,
    maxLengthErrorMessage,
    maxLengthPassportMessage,
    maxLengthSecurityAnswerErrorMessage,
    maxLengthSecurityQuestionErrorMessage,
    maxLengthUtilitiesAccountNumberMessage,
    minLengthErrorMessage,
    minLengthUtilitiesAccountNumberMessage,
    passwordErrorMessage,
    passwordMaxLengthErrorMessage,
} from './validationRules.const'

const containsUppercaseLatin = /[A-Z]+/
const containsLowerCaseLatin = /[a-z]+/
export const containsNumbers = /\d+/
const containsSpecialSymbols = /[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]+/
const allowedPasswordCharacters =
    /^[A-Za-z\d!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~]*$/

const onlyNumberSymbols = /^\d+$/

const allowedNameCharacters = /^[a-zA-Zа-яА-ЯёЁ \-']*$/
const allowedPassportCharacters = /^[a-zA-Zа-яА-ЯёЁ0-9 \-']*$/
const allowedSecurityQuestionCharacters = /^[a-zA-Zа-яА-ЯёЁ0-9 "#-*+%?]*$/
const allowedSecurityAnswerCharacters = /^[a-zA-Zа-яА-ЯёЁ0-9 "#-*+%]*$/

const allowedStreetCharacters = /^[a-zA-Zа-яА-ЯёЁ0-9 \-.,']*$/
const allowedBuildingCharacters = /^[a-zA-Zа-яА-ЯёЁ0-9]*$/
const allowedApartmentCharacters = /^[0-9]*$/

const phoneNumberMaskRU = /^\+7[0-9]{10}$/
const phoneNumberMaskBY = /^\+375[0-9]{9}$/
const internetAccountNumberCharacters = /^[0-9]{10}$/

export const NUMBER_FORMAT = /\B(?=(\d{3})+(?!\d))/g

const passwordGroups = [
    containsLowerCaseLatin,
    containsUppercaseLatin,
    containsNumbers,
    containsSpecialSymbols,
]

export const limitRepeatingCharacters =
    (characters: string[]) => (value: string) => {
        return value
            .split('')
            .map((char, i, string) => {
                if (characters.includes(char)) {
                    if (i === 0) return ''
                    if (characters.includes(string[i - 1])) {
                        return ''
                    }
                }
                return char
            })
            .join('')
    }

export const removeCharsFromTheEnd =
    (characters: string[]) => (value: string) => {
        const lastChar = value.slice(-1)
        return characters.includes(lastChar) ? value.slice(0, -1) : value
    }

export const passwordValidationRules = yup
    .string()
    .min(6, passwordErrorMessage)
    .max(20, passwordMaxLengthErrorMessage)
    .matches(allowedPasswordCharacters, passwordErrorMessage)
    .test('complexity', passwordErrorMessage, (password) => {
        if (!password) return false
        let groups = 0
        for (const group of passwordGroups) {
            if (!group.test(password)) continue
            groups++
        }
        return groups >= 3
    })

export const newPasswordValidationRule = passwordValidationRules.notOneOf(
    [yup.ref('currentPassword')],
    'Текущий и новый пароли совпадают. Попробуйте ещё раз'
)

export const confirmPasswordValidationRules = yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')

export const passportValidationRules = yup
    .string()
    .min(6, minLengthErrorMessage)
    .max(20, maxLengthPassportMessage)
    .matches(allowedPassportCharacters, forbiddenSymbolsErrorMessage)

export const nameValidationRules = yup
    .string()
    .matches(allowedNameCharacters, forbiddenSymbolsErrorMessage)
    .required(emptyNameMessage)
    .min(2, minLengthErrorMessage)

export const lastNameValidationRules = yup
    .string()
    .matches(allowedNameCharacters, forbiddenSymbolsErrorMessage)
    .required(emptyLastNameMessage)
    .min(2, minLengthErrorMessage)

export const middleNameValidationRules = yup
    .string()
    .notRequired()
    .min(0, minLengthErrorMessage)
    .matches(allowedNameCharacters, forbiddenSymbolsErrorMessage)

export const securityQuestionValidationRules = yup
    .string()
    .matches(allowedSecurityQuestionCharacters, forbiddenSymbolsErrorMessage)
    .max(charactersLimitSecurityQuestion, maxLengthSecurityQuestionErrorMessage)

export const securityAnswerValidationRules = yup
    .string()
    .matches(allowedSecurityAnswerCharacters, forbiddenSymbolsErrorMessage)
    .max(charactersLimitSecurityQuestion, maxLengthSecurityAnswerErrorMessage)

export const setPasswordSchema = yup.object({
    password: passwordValidationRules,
    confirmPassword: confirmPasswordValidationRules,
})

export const registrationDataSchema = yup.object({
    passportNumber: passportValidationRules,
    firstName: nameValidationRules,
    middleName: middleNameValidationRules,
    lastName: lastNameValidationRules,
})

export const securityQuestionFormSchema = yup.object({
    securityQuestion: securityQuestionValidationRules,
    securityAnswer: securityAnswerValidationRules,
})

export const verifyPassportSchema = yup.object({
    passportNumber: passportValidationRules,
})

export const onlyNumbersValidationRules = yup
    .string()
    .matches(onlyNumberSymbols, forbiddenSymbolsErrorMessage)
    .min(6, minLengthErrorMessage)

export const requiredValidationRules = yup.string().required()

export const streetValidationRules = yup
    .string()
    .matches(allowedStreetCharacters, forbiddenSymbolsErrorMessage)
    .min(2, minLengthErrorMessage)

export const houseValidationRules = yup
    .string()
    .required(minLengthErrorMessage)
    .max(4, maxLengthErrorMessage)
    .matches(onlyNumberSymbols, forbiddenSymbolsErrorMessage)

export const buildingValidationRules = yup
    .string()
    .max(2, maxLengthErrorMessage)
    .matches(allowedBuildingCharacters, forbiddenSymbolsErrorMessage)

export const apartmentValidationRules = yup
    .string()
    .max(4, maxLengthErrorMessage)
    .matches(allowedApartmentCharacters, forbiddenSymbolsErrorMessage)

export const phoneNumberValidationRulesRU = yup
    .string()
    .transform((value) => value.trim().replace(/\s+/g, ''))
    .matches(phoneNumberMaskRU, minLengthErrorMessage)
    .matches(/(.*(?:^\+7[0-689][0-9]{9}$))/, invalidCodeErrorMessage)

export const phoneNumberValidationRulesBY = yup
    .string()
    .transform((value) => value.trim().replace(/\s+/g, ''))
    .matches(phoneNumberMaskBY, minLengthErrorMessage)

export const getPhoneNumberValidationRules = (countryCode: string | null) => {
    return countryCode === 'BY'
        ? phoneNumberValidationRulesBY
        : phoneNumberValidationRulesRU
}

export const bankAccountNumberValidationRules = yup
    .string()
    .required(fieldRequired)
    .matches(containsNumbers, forbiddenSymbolsErrorMessage)
    .min(16, minLengthErrorMessage)
    .max(30, 'Максимальное количество цифр в поле - 30')

export const utilitiesAccountNumberValidationRules = yup
    .string()
    .required(fieldRequired)
    .matches(onlyNumberSymbols, invalidUtilitiesAccountNumberMessage)
    .min(3, minLengthUtilitiesAccountNumberMessage)
    .max(30, maxLengthUtilitiesAccountNumberMessage)

export const internetAccountNumberValidationRules = yup
    .string()
    .required(fieldRequired)
    .matches(
        internetAccountNumberCharacters,
        invalidInternetAccountNumberMessage
    )

export const checkFileLimitExceeded = (files: FileList) => {
    if (files && files.length > 0 && files[0].size !== undefined) {
        return files[0].size / 1048576 < 16
    }
    return true
}

export const checkFileType = (files: FileList) => {
    return (
        files.length === 0 ||
        files[0].type === 'image/jpeg' ||
        files[0].type === 'image/png'
    )
}

export const checkFileRuleRequired = (files: FileList) => {
    return !!(files && files.length)
}

export const checkFileFormat = (files: FileList) => {
    const hasValidType = (file: File) => {
        return (
            file.type === 'image/jpeg' ||
            file.type === 'image/png' ||
            file.type === 'application/pdf'
        )
    }

    return files && files[0] && hasValidType(files[0])
}

export const uploadVerificationDocumentsSchema = (names: string[]) =>
    yup
        .object()
        .shape(
            names.reduce((acc, name) => {
                return {
                    ...acc,
                    [name]: yup
                        .mixed()
                        .test(
                            'fileSize',
                            fileErrorLimitText,
                            checkFileLimitExceeded
                        )
                        .test(
                            'fileRequired',
                            fileRequired,
                            checkFileRuleRequired
                        )
                        .test('fileFormat', fileInvalidFormat, checkFileFormat),
                }
            }, {})
        )
        .test('bothFilesSize', bothFilesLimitText, (value) => {
            const sumSize = Object.values(value).reduce((size, doc) => {
                const currDocSize = doc[0] ? (doc[0] as File).size : 0
                return size + currDocSize
            }, 0)

            return sumSize <= maxCombinedFileSize
        })

export const innPayeeNumberValidationRules = yup
    .string()
    .required(fieldRequired)
    .matches(containsNumbers, forbiddenSymbolsErrorMessage)
    .min(10, minLengthErrorMessage)
    .max(12, 'Максимальное количество цифр в поле - 12')
    .test(
        'numbers should be 10 or 12',
        'Некорректный номер ИНН',
        (value) => !(value?.length === 11)
    )

export const bicBankPayeeNumberValidationRules = yup
    .string()
    .required(fieldRequired)
    .matches(containsNumbers, forbiddenSymbolsErrorMessage)
    .min(9, minLengthErrorMessage)
    .max(9, 'Максимальное количество цифр в поле - 9')

export const applicationCardDataSchema = yup.object({
    city: requiredValidationRules,
    indexAddress: onlyNumbersValidationRules,
    streetName: streetValidationRules,
    houseNumber: houseValidationRules,
    buildingNumber: buildingValidationRules,
    apartmentNumber: apartmentValidationRules,
})

export const selectDepositAccountSchema = yup.object({
    depositAccount: requiredValidationRules,
})

const notValidCodesForRf = [
    907, 940, 942, 943, 944, 945, 946, 947, 948, 949, 957, 959, 972, 973, 974,
    975, 976, 979, 990, 998,
]
const validCodesForRb = [25, 29, 33, 44]

const validateRuPhoneCode = (value: string) => {
    const { length } = value.replace(/\s/g, '')
    const operatorCode = value?.slice(2, 6)
    const currentValue = parseInt(String(operatorCode), 10)
    return (
        currentValue >= 900 &&
        !notValidCodesForRf.some((v) => v === currentValue) &&
        length === 12
    )
}
const validateRbPhoneCode = (value: string) => {
    const { length } = value.replace(/\s/g, '')
    const operatorCode = value?.slice(5, 7)
    const currentValue = parseInt(String(operatorCode), 10)
    return validCodesForRb.some((v) => v === currentValue) && length === 13
}

export const phoneNumberForRegistrationRules = yup.object().shape({
    phoneNumber: yup
        .string()
        .test('phone number test', 'Некорректный номер телефона', (value) => {
            if (typeof value !== 'string') {
                return true
            }

            switch (true) {
                case /\+(?=7)/.test(value):
                    return validateRuPhoneCode(value)
                case /\+(?=375)/.test(value):
                    return validateRbPhoneCode(value)
                default:
                    return true
            }
        }),
})
