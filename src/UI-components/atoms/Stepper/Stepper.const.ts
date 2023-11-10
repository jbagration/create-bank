export const steps = {
    registrationNoClient: [
        'Введите СМС-код',
        'Заполните информацию',
        'Придумайте пароль',
        'Укажите\nконтрольный вопрос',
        '',
    ],
    registrationClient: [
        'Введите СМС-код',
        'Придумайте пароль',
        'Укажите контрольный вопрос',
        '',
    ],
    passwordRecovery: [
        'Введите номер паспорта',
        'Введите СМС-код',
        'Придумайте пароль',
        '',
    ],
}

export const setStepperVariant = (stepperVariant: any) => {
    let stepperWord

    if (stepperVariant === 'ThreeStepsPassword') {
        stepperWord = steps.passwordRecovery
    } else if (stepperVariant === 'ThreeStepsReg') {
        stepperWord = steps.registrationClient
    } else {
        stepperWord = steps.registrationNoClient
    }
    return stepperWord
}
