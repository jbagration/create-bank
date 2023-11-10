import { contactInfoDescription } from '../ContactCenter/ContactCenter.const'

export const mainMessage = 'Здравствуйте! Вам нужна помощь?'

export const optionChat = 'Начать чат'
export const optionCall = 'Позвонить в банк'
export const optionMail = 'Написать письмо'
export const optionCallIn = 'Заказать звонок'

export const mailAddress =
    contactInfoDescription.find(
        (item) => item.linkTo && item.linkTo.includes('mailto:')
    )?.linkTo ?? 'mailto:info@CreateBank.ru'

export const callCaption =
    'На всех звонках в контакт-центр осуществляется запись разговора для обеспечения качества обслуживания'
