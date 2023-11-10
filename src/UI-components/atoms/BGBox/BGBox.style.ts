import BoxBackground from '../../../assets/img/BGBox/bg5.jpg'

import { backgroundGradient } from '../../molecules/Slider/Slider.const'

export const BGBoxStyled = {
    width: '100%',
    height: '100vh',
    backgroundImage: `${backgroundGradient}, url(${BoxBackground})`,
    backgroundSize: 'cover',
}
