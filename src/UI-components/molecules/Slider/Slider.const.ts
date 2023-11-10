import FirstBackground from '../../../assets/img/Slider/sliderBg1.png'
import SecondBackground from '../../../assets/img/Slider/sliderBg2.png'
import ThirdBackground from '../../../assets/img/Slider/sliderBg3.png'
import FourthBackground from '../../../assets/img/Slider/sliderBg4.png'

import { ItemObjectProps } from './SliderItem'

export const backgroundGradient =
    'linear-gradient( rgba(0, 0, 0, 0.75) 100%, rgba(0, 0, 0, 0.75)100%)'

export const cardItems: ItemObjectProps[] = [
    {
        cardTitle: 'Мобильное приложение CreateBank Online',
        cardDescription: 'Банк в вашем смартфоне',
        cardBackground: `linear-gradient( rgba(0, 0, 0, 0.75) 100%, rgba(0, 0, 0, 0.75)100%), url(${FirstBackground})`,
        cardLink: '#card1',
    },
    {
        cardTitle: 'Интернет банк',
        cardDescription: 'Управляйте всеми услугами банка не выходя из дома',
        cardBackground: `linear-gradient( rgba(0, 0, 0, 0.75) 100%, rgba(0, 0, 0, 0.75)100%), url(${SecondBackground})`,
        cardLink: '#card2',
    },
    {
        cardTitle: 'CreateBank Online',
        cardDescription: 'Предоставляет широкий спектр услуг частным клиентам',
        cardBackground: `linear-gradient( rgba(0, 0, 0, 0.75) 100%, rgba(0, 0, 0, 0.75)100%), url(${ThirdBackground})`,
        cardLink: '#card3',
    },
    {
        cardTitle: 'CreateBank',
        cardDescription: 'Узнайте больше о крупнейшем банке России',
        cardBackground: `linear-gradient( rgba(0, 0, 0, 0.75) 100%, rgba(0, 0, 0, 0.75)100%), url(${FourthBackground})`,
        cardLink: '#card4',
    },
]
