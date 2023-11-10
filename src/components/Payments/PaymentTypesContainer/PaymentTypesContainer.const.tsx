import iconFinancialServices from 'src/assets/svg/iconFinancialServices.svg'
import iconInfoServices from 'src/assets/svg/iconInfoServices.svg'
import iconOtherPayments from 'src/assets/svg/iconOtherPayments.svg'
import iconUtilityPayments from 'src/assets/svg/iconUtilityPayments.svg'

export const paymentTypes = [
    {
        id: 1,
        icon: `${iconFinancialServices}`,
        title: 'Банковские, финансовые услуги',
        path: 'financepage',
    },
    {
        id: 2,
        icon: `${iconUtilityPayments}`,
        title: 'Коммунальные услуги',
        path: 'utilities',
    },
    {
        id: 3,
        icon: `${iconInfoServices}`,
        title: 'Услуги связи',
        path: 'infopage',
    },
    {
        id: 4,
        icon: `${iconOtherPayments}`,
        title: 'Прочие платежи',
        path: 'other',
    },
]
