import iconCardApplyIconCard from '../../../../assets/svg/applyCardIconCard.svg'
import iconCardApplyDone from '../../../../assets/svg/applyCardIconDone.svg'
import iconCardApplyIconMobile from '../../../../assets/svg/applyCardIconPhone.svg'
import iconBank3 from '../../../../assets/svg/bankIconBancomat.svg'
import iconBank1 from '../../../../assets/svg/bankIconCentral.svg'
import iconBank2 from '../../../../assets/svg/bankIconTerminal.svg'
import iconCloseBtn from '../../../../assets/svg/CloseBtn.svg'

export const bankIconCentral = iconBank1
export const bankIconTerminal = iconBank2
export const bankIconBancomat = iconBank3

export const cardApplyDone = iconCardApplyDone
export const cardApplyIconCard = iconCardApplyIconCard
export const cardApplyIconPhone = iconCardApplyIconMobile
export const btnClose = iconCloseBtn

export const cardApplyModalText = {
    title: 'Заявка на карту подтверждена',
    message: 'Наш специалист свяжется с Вами в ближайшее время',
    departmentName: 'Отдел поддержки держателей карт',
    mainContext:
        'Активируйте или запросите новую карту, осуществите платежи по кредитной карте, сообщите об утере или краже.',
    sheduleWeek: 'Будние дни: с 08:00 до 20:00',
    sheduleWeekend: 'Сб, Вс: с 09:00 до 17:30',
    callRFTitle: 'Бесплатный звонок по России',
    callRFPhone: '3800',
    callAbrTitle: 'Международные звонки',
    callAbrPhone: '+7 (684) 654-01-02',
} as const
