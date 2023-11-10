import {
    buildingValidationRules,
    houseValidationRules,
    middleNameValidationRules,
    nameValidationRules,
    onlyNumbersValidationRules,
    passportValidationRules,
    passwordValidationRules,
    securityAnswerValidationRules,
    securityQuestionValidationRules,
    streetValidationRules,
} from './validationRules'

import {
    emptyNameMessage,
    forbiddenSymbolsErrorMessage,
    maxLengthErrorMessage,
    maxLengthPassportMessage,
    maxLengthSecurityAnswerErrorMessage,
    maxLengthSecurityQuestionErrorMessage,
    minLengthErrorMessage,
    passwordErrorMessage,
    passwordMaxLengthErrorMessage,
} from './validationRules.const'

describe('passwordValidationRules', () => {
    const allowedCharacters = '1wW-"!(f):/'
    const notAllowedCharacters = 'пароль'
    const notEnoughCharacters = '1wW'
    const tooManyCharacters = '1wW-35151wge2g4b242bv24242v2v'
    const tooEasy = '1234567'
    const stillTooEasy = '1234qwerty'
    const solid = '1234-)*_%qwerty'
    const strong = '1234-)*_%QwErTy'

    it('should pass the password with allowed characters', () => {
        expect(passwordValidationRules.validateSync(allowedCharacters)).toBe(
            allowedCharacters
        )
    })
    it('should throw a ValidationError with correct message', () => {
        expect(() =>
            passwordValidationRules.validateSync(notEnoughCharacters)
        ).toThrow(passwordErrorMessage)
        expect(() =>
            passwordValidationRules.validateSync(tooManyCharacters)
        ).toThrow(passwordMaxLengthErrorMessage)
        expect(() =>
            passwordValidationRules.validateSync(notAllowedCharacters)
        ).toThrow(passwordErrorMessage)
    })
    it('should throw a ValidationError if the password is not complex enough', () => {
        expect(() => passwordValidationRules.validateSync(tooEasy)).toThrow(
            passwordErrorMessage
        )
        expect(() =>
            passwordValidationRules.validateSync(stillTooEasy)
        ).toThrow(passwordErrorMessage)
        expect(passwordValidationRules.validateSync(solid)).toBe(solid)
        expect(passwordValidationRules.validateSync(strong)).toBe(strong)
    })
})

describe('passportValidationRules', () => {
    const allowedCharacters = 'MR11421515'
    const notAllowedCharacters = 'GEG-!-1451'
    const notEnoughCharacters = '1wW'
    const tooManyCharacters = '1wW35151wge2g4b242bv24242v2v'

    it('should pass the passport with allowed characters', () => {
        expect(passportValidationRules.validateSync(allowedCharacters)).toBe(
            allowedCharacters
        )
    })
    it('should throw a ValidationError with correct message', () => {
        expect(() =>
            passportValidationRules.validateSync(notEnoughCharacters)
        ).toThrow(minLengthErrorMessage)
        expect(() =>
            passportValidationRules.validateSync(tooManyCharacters)
        ).toThrow(maxLengthPassportMessage)
        expect(() =>
            passportValidationRules.validateSync(notAllowedCharacters)
        ).toThrow(forbiddenSymbolsErrorMessage)
    })
})

describe('nameValidationRules, lastNameValidationRules', () => {
    const allowedCharacters = 'Jason'
    const notAllowedCharacters = '12415-!'
    const notEnoughCharacters = 'K'
    const empty = ''

    it('should pass the name with allowed characters', () => {
        expect(nameValidationRules.validateSync(allowedCharacters)).toBe(
            allowedCharacters
        )
    })
    it('should throw a ValidationError with correct message', () => {
        expect(() =>
            nameValidationRules.validateSync(notEnoughCharacters)
        ).toThrow(minLengthErrorMessage)
        expect(() => nameValidationRules.validateSync(empty)).toThrow(
            emptyNameMessage
        )
        expect(() =>
            nameValidationRules.validateSync(notAllowedCharacters)
        ).toThrow(forbiddenSymbolsErrorMessage)
    })
})

describe('middleNameValidationRules', () => {
    const empty = ''

    it('should pass the empty middle name', () => {
        expect(middleNameValidationRules.validateSync(empty)).toBe(empty)
    })
})

describe('securityQuestionValidationRules', () => {
    const allowedCharacters = 'Вопрос 135: Где?'
    const notAllowedCharacters = '!@$^()_'
    const tooLongQuestion = '1'.repeat(100)

    it('should pass the security question with allowed characters', () => {
        expect(
            securityQuestionValidationRules.validateSync(allowedCharacters)
        ).toBe(allowedCharacters)
    })
    it('should throw a ValidationError with correct message', () => {
        expect(() =>
            securityQuestionValidationRules.validateSync(notAllowedCharacters)
        ).toThrow(forbiddenSymbolsErrorMessage)
        expect(() =>
            securityQuestionValidationRules.validateSync(tooLongQuestion)
        ).toThrow(maxLengthSecurityQuestionErrorMessage)
    })
})

describe('securityAnswerValidationRules', () => {
    const allowedCharacters = 'Ответ 135: Да'
    const notAllowedCharacters = '!?@$^()_'
    const tooLongQuestion = '1'.repeat(100)

    it('should pass the security question with allowed characters', () => {
        expect(
            securityAnswerValidationRules.validateSync(allowedCharacters)
        ).toBe(allowedCharacters)
    })
    it('should throw a ValidationError with correct message', () => {
        expect(() =>
            securityAnswerValidationRules.validateSync(notAllowedCharacters)
        ).toThrow(forbiddenSymbolsErrorMessage)
        expect(() =>
            securityAnswerValidationRules.validateSync(tooLongQuestion)
        ).toThrow(maxLengthSecurityAnswerErrorMessage)
    })
})

describe('onlyNumbersValidationRules', () => {
    const allowedCharacters = '125151'
    const notAllowedCharacters = '125 ewg-*'
    const notEnoughCharacters = '125'

    it('should pass the string containing only numbers', () => {
        expect(onlyNumbersValidationRules.validateSync(allowedCharacters)).toBe(
            allowedCharacters
        )
    })
    it('should throw a ValidationError with correct message', () => {
        expect(() =>
            onlyNumbersValidationRules.validateSync(notEnoughCharacters)
        ).toThrow(minLengthErrorMessage)
        expect(() =>
            onlyNumbersValidationRules.validateSync(notAllowedCharacters)
        ).toThrow(forbiddenSymbolsErrorMessage)
    })
})

describe('streetValidationRules', () => {
    const allowedCharacters = 'ул. 12-13-я линии Васильевского острова'
    const notAllowedCharacters = '?!@#$%^&*'
    const notEnoughCharacters = '1'

    it('should pass the string with allowed characters', () => {
        expect(streetValidationRules.validateSync(allowedCharacters)).toBe(
            allowedCharacters
        )
    })
    it('should throw a ValidationError with correct message', () => {
        expect(() =>
            streetValidationRules.validateSync(notEnoughCharacters)
        ).toThrow(minLengthErrorMessage)
        expect(() =>
            streetValidationRules.validateSync(notAllowedCharacters)
        ).toThrow(forbiddenSymbolsErrorMessage)
    })
})

describe('houseValidationRules', () => {
    const allowedCharacters = '1'
    const notAllowedCharacters = 'у*('
    const empty = ''
    const tooLong = '1'.repeat(10)

    it('should pass the string with allowed characters', () => {
        expect(houseValidationRules.validateSync(allowedCharacters)).toBe(
            allowedCharacters
        )
    })
    it('should throw a ValidationError with correct message', () => {
        expect(() => houseValidationRules.validateSync(empty)).toThrow(
            minLengthErrorMessage
        )
        expect(() =>
            houseValidationRules.validateSync(notAllowedCharacters)
        ).toThrow(forbiddenSymbolsErrorMessage)
        expect(() => houseValidationRules.validateSync(tooLong)).toThrow(
            maxLengthErrorMessage
        )
    })
})

describe('buildingValidationRules', () => {
    const allowedCharacters = '1d'
    const empty = ''
    const notAllowedCharacters = '*['
    const tooLong = '1'.repeat(10)

    it('should pass the string with allowed characters', () => {
        expect(buildingValidationRules.validateSync(allowedCharacters)).toBe(
            allowedCharacters
        )
        expect(buildingValidationRules.validateSync(empty)).toBe(empty)
    })
    it('should throw a ValidationError with correct message', () => {
        expect(() =>
            buildingValidationRules.validateSync(notAllowedCharacters)
        ).toThrow(forbiddenSymbolsErrorMessage)
        expect(() => buildingValidationRules.validateSync(tooLong)).toThrow(
            maxLengthErrorMessage
        )
    })
})
