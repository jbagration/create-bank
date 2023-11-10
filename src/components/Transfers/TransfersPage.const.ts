import {
    BetweenAccountsIcon,
    ByDetailsIcon,
    CardIcon,
    PhoneIcon,
} from 'src/assets/svg/TransferPage'

export const transfersMyselfTitle = 'Перевод между своими счетами'
export const transferByPhoneTitle = 'Перевод по номеру телефона'
export const transferByDetailsTitle = 'Перевод по реквизитам'
export const transfersOptions = [
    {
        icon: PhoneIcon,
        text: 'По номеру телефона',
        path: 'phone',
    },
    {
        icon: BetweenAccountsIcon,
        text: 'Между своими счетами',
        path: 'myself',
    },
    {
        icon: CardIcon,
        text: 'По номеру карты',
        path: 'card',
    },
    {
        icon: ByDetailsIcon,
        text: 'По реквизитам',
        path: 'details',
    },
]

export const writeOffCardFieldText = {
    label: 'Карта списания',
    placeholder: 'Выберите карту списания',
}

export const passingToAnCardFieldText = {
    label: 'Карта зачисления',
    placeholder: 'Выберите карту зачисления',
}

export const writeNameOfPayeeText = {
    label: 'Наименование получателя',
    labelInput: 'Имя получателя',
    placeholder: 'Выберите получателя',
    placeholderInput: 'Введите имя получателя',
}

export const transferAmountFieldText = {
    label: 'Сумма перевода, RUB',
    helperText:
        'Сумма перевода должна быть не менее 10 RUB и не более 100000 RUB',
    placeholder: 'Сумма перевода',
    commissionText: 'Комиссия 50 RUB',
}

export const cardFieldText = {
    label: 'Номер карты',
    helperText: 'Номер карты должен содержать 16 символов',
    placeholder: 'XXXX-XXXX-XXXX-XXXX',
}

export const accountNumberLabel = 'Номер счета'
export const innPayeeLabel = 'ИНН получателя'
export const bicOfPayeeBankLabel = 'БИК банка получателя'
export const purposeOfTheTransferLabel = 'Цель перевода'
export const telephoneFieldText = 'Номер телефона'
export const transferButtonText = 'Перевод'

export const conditionsText = ['Я согласен с ', 'условиями перевода']

export const transfersOption = ['Физическое лицо', 'Юридическое лицо']
