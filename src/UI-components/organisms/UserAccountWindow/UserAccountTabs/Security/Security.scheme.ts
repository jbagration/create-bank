import {
    confirmPasswordValidationRules,
    newPasswordValidationRule,
    passwordValidationRules,
    securityAnswerValidationRules,
    securityQuestionValidationRules,
} from 'src/utils'
import * as yup from 'yup'

import { optionalFieldValidation } from './Security.utils'

export const optionalSecurityScheme = yup.object().shape(
    {
        currentPassword: optionalFieldValidation(
            'currentPassword',
            passwordValidationRules
        ),
        password: optionalFieldValidation(
            'password',
            newPasswordValidationRule
        ),
        confirmPassword: optionalFieldValidation(
            'confirmPassword',
            confirmPasswordValidationRules
        ),
        securityQuestion: optionalFieldValidation(
            'securityQuestion',
            securityQuestionValidationRules
        ),
        securityAnswer: optionalFieldValidation(
            'securityAnswer',
            securityAnswerValidationRules
        ),
    },
    [
        ['currentPassword', 'currentPassword'],
        ['password', 'password'],
        ['confirmPassword', 'confirmPassword'],
        ['securityAnswer', 'securityAnswer'],
        ['securityQuestion', 'securityQuestion'],
    ]
)
