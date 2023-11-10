import ChinaFlag from '../../../assets/svg/ExchangeRatesPageSvg/flagsCountry/china.svg'
import EuropeFlag from '../../../assets/svg/ExchangeRatesPageSvg/flagsCountry/europe.svg'
import JapanFlag from '../../../assets/svg/ExchangeRatesPageSvg/flagsCountry/japan.svg'
import UsaFlag from '../../../assets/svg/ExchangeRatesPageSvg/flagsCountry/usa.svg'

import { CurrencyCodes } from './ExchangeRatesTable.type'

export const countriesFlags: CurrencyCodes = {
    USD: `${UsaFlag}`,
    EUR: `${EuropeFlag}`,
    CNY: `${ChinaFlag}`,
    JPY: `${JapanFlag}`,
}

export const countriesNames: CurrencyCodes = {
    USD: 'Доллар США',
    EUR: 'Евро',
    CNY: 'Китайский юань',
    JPY: 'Японских иен',
}
