import { IndividualsIcon } from 'src/assets'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'

export const contactInfoDescription = [
    {
        contact: '3700',
        description: 'Бесплатные звонки по Росcии',
        icon: <PhoneIphoneIcon />,
    },
    {
        contact: '+7 (684) 654-01-02',
        description: 'Международные звонки',
        icon: <PhoneIphoneIcon />,
    },
    {
        contact: 'info@CreateBank.ru',
        description: 'E-mail адрес',
        icon: <EmailOutlinedIcon fontSize="small" />,
        linkTo: 'mailto:info@CreateBank.ru',
    },
    {
        contact: 'г. Москва, ул.Московская, 2, 07100',
        description: 'Адрес главного офиса',
        icon: <RoomOutlinedIcon fontSize="small" />,
        linkTo: 'https://yandex.ru/maps/?text={г. Москва, ул.Московская, 2, 07100}',
    },
]

export const contactInfo = {
    title: 'Для физических лиц',
    icon: <IndividualsIcon />,
    description: 'Рекомендации по продукту, информация о счете и транзакциях',
    workTime: 'Ежедневно с 8:00 до 20:00',
}
