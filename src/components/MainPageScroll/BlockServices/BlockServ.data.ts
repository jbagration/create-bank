import cardProducts from 'src/assets/img/MainPageScroll/cardProducts.png'
import loan from 'src/assets/img/MainPageScroll/Loan.png'
import moneyTransfers from 'src/assets/img/MainPageScroll/moneyTransfers.png'

import { objectDescription } from '../Data/bockServicesText'

import { ServicesType } from './BlockServ.type'

export const arrayObjectsServices: Array<ServicesType> = [
    {
        head: ['Карточные', 'продукты'],
        description: objectDescription.firstDescription,
        image: cardProducts,
    },
    {
        head: ['Онлайн', 'переводы'],
        description: objectDescription.secondDescription,
        image: moneyTransfers,
    },
    {
        head: ['Потребительские', 'кредиты'],
        description: objectDescription.thirdDescription,
        image: loan,
    },
]
