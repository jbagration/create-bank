import iconAlfa from 'src/assets/svg/iconAlfa.svg'
import iconApartment from 'src/assets/svg/iconApartment.svg'
import iconBankService from 'src/assets/svg/iconBankServices.svg'
import iconCharity from 'src/assets/svg/iconCharity.svg'
import iconCreateBank from 'src/assets/svg/iconCreateBank.svg'
import iconEducationDevelopment from 'src/assets/svg/iconEducationDevelopment.svg'
import iconElectricity from 'src/assets/svg/iconElectricity.svg'
import iconFines from 'src/assets/svg/iconFines.svg'
import iconGas from 'src/assets/svg/iconGas.svg'
import iconGazprom from 'src/assets/svg/iconGazprom.svg'
import iconHealth from 'src/assets/svg/iconHealth.svg'
import iconInfoService from 'src/assets/svg/iconInfoServices.svg'
import iconInternet from 'src/assets/svg/iconInternet.svg'
import iconMobileConnect from 'src/assets/svg/iconMobileConnection.svg'
import iconOpen from 'src/assets/svg/iconOpen.svg'
import iconOther from 'src/assets/svg/iconOtherPayments.svg'
import iconRosSB from 'src/assets/svg/iconRosSB.svg'
import iconSber from 'src/assets/svg/iconSber.svg'
import iconTaxes from 'src/assets/svg/iconTaxes.svg'
import iconTicketsLottery from 'src/assets/svg/iconTicketsLottery.svg'
import iconTinkoff from 'src/assets/svg/iconTinkoff.svg'
import iconTourismLeisure from 'src/assets/svg/iconTourismLeisure.svg'
import iconTransportation from 'src/assets/svg/iconTransportation.svg'
import iconVTB from 'src/assets/svg/iconVTB.svg'
import iconWater from 'src/assets/svg/iconWater.svg'

export const mainServicesItems = [
    {
        icon: `${iconBankService}`,
        text: 'Банковские, финансовые услуги',
        path: 'financepage',
    },
    {
        icon: `${iconInfoService}`,
        text: 'Услуги связи',
        path: 'infopage',
    },
]

export const bankAndFinanceServicesList = [
    'Easy Bank',
    'Cбербанк',
    'ВТБ',
    'Альфа-банк',
    'Россельхозбанк',
    'Тинькофф',
    'Открытие',
    'Газпромбанк',
]

export const informationServicesItems = [
    {
        icon: `${iconMobileConnect}`,
        text: 'Мобильная связь',
        path: 'mobile',
    },
    {
        icon: `${iconInternet}`,
        text: 'Интернет',
        path: 'internet',
    },
]

export const financeDebtItems = [
    {
        icon: `${iconCreateBank}`,
        text: 'Easy Bank',
        path: 'new',
    },
    {
        icon: `${iconSber}`,
        text: 'Сбербанк',
        path: 'new',
    },
    {
        icon: `${iconVTB}`,
        text: 'ВТБ',
        path: 'new',
    },
    {
        icon: `${iconAlfa}`,
        text: 'Альфа-банк',
        path: 'new',
    },
    {
        icon: `${iconRosSB}`,
        text: 'Россельхозбанк',
        path: 'new',
    },
    {
        icon: `${iconTinkoff}`,
        text: 'Тинькофф',
        path: 'new',
    },
    {
        icon: `${iconGazprom}`,
        text: 'Газпромбанк',
        path: 'new',
    },
    {
        icon: `${iconOpen}`,
        text: 'Открытие',
        path: 'new',
    },
]

export const informationMobileItems = [
    {
        icon: `${iconOther}`,
        text: 'БиЛайн',
        path: 'new',
    },
    {
        icon: `${iconOther}`,
        text: 'МТС',
        path: 'new',
    },
    {
        icon: `${iconOther}`,
        text: 'Теле2',
        path: 'new',
    },
    {
        icon: `${iconOther}`,
        text: 'Мегафон',
        path: 'new',
    },
]

export const informationUtilityTypes = {
    APARTMENT: {
        icon: `${iconApartment}`,
        text: 'Квартплата',
        path: 'apartments',
    },
    ELECTRICITY: {
        icon: `${iconElectricity}`,
        text: 'Электроэнергия',
        path: 'energy',
    },
    GAS: {
        icon: `${iconGas}`,
        text: 'Газ',
        path: 'gas',
    },
    WATER: {
        icon: `${iconWater}`,
        text: 'Водоснабжение',
        path: 'water',
    },
}

export const informationInternetItems = [
    {
        icon: `${iconOther}`,
        text: 'Ростелеком',
        path: 'new',
    },
    {
        icon: `${iconOther}`,
        text: 'МТС',
        path: 'new',
    },
    {
        icon: `${iconOther}`,
        text: 'ТрансТелеКом',
        path: 'new',
    },
    {
        icon: `${iconOther}`,
        text: 'Мегафон',
        path: 'new',
    },
    {
        icon: `${iconOther}`,
        text: 'СтарТелеком',
        path: 'new',
    },
    {
        icon: `${iconOther}`,
        text: 'Раском',
        path: 'new',
    },
]

export const otherServicesItems = [
    {
        icon: `${iconTicketsLottery}`,
        text: 'Билеты/лотереи',
        path: 'new',
    },
    {
        icon: `${iconCharity}`,
        text: 'Благотворительность',
        path: 'new',
    },
    {
        icon: `${iconHealth}`,
        text: 'Здоровье',
        path: 'new',
    },
    {
        icon: `${iconTaxes}`,
        text: 'Налоги',
        path: 'new',
    },
    {
        icon: `${iconEducationDevelopment}`,
        text: 'Образование и развитие',
        path: 'new',
    },
    {
        icon: `${iconTransportation}`,
        text: 'Транспортные услуги',
        path: 'new',
    },
    {
        icon: `${iconTourismLeisure}`,
        text: 'Туризм и отдых',
        path: 'new',
    },
    {
        icon: `${iconFines}`,
        text: 'Штрафы',
        path: 'new',
    },
]
