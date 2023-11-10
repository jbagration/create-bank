import { TransfersIcon } from 'src/assets/svg/TransferPage'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined'
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined'
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined'
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined'
import TollIcon from '@mui/icons-material/Toll'

const credits = 'credits'
const payments = 'payments'
const cards = 'cards'
const deposits = 'deposits'
const transfers = 'transfers'
const investing = 'investing'
const insurance = 'insurance'
const deals = 'deals_offers'

export const SidebarLinks = [
    {
        link: payments,
        title: 'Платежи',
        icon: <SendToMobileOutlinedIcon />,
    },
    {
        link: transfers,
        title: 'Переводы',
        icon: <TransfersIcon />,
    },
    {
        link: cards,
        title: 'Карты',
        icon: <CreditCardIcon />,
        sublink: [
            { link: `${cards}/my_cards`, subtitle: 'Мои карты' },
            { link: `${cards}/products`, subtitle: 'Карточные продукты' },
        ],
    },
    {
        link: credits,
        title: 'Кредиты',
        icon: <TollIcon />,
        sublink: [
            { link: `${credits}`, subtitle: 'Мои кредиты' },
            { link: `${credits}/products`, subtitle: 'Кредитные продукты' },
        ],
    },
    {
        link: deposits,
        icon: <SavingsOutlinedIcon />,
        title: 'Депозиты',
        sublink: [
            { link: `${deposits}/my_deposits`, subtitle: 'Мои депозиты' },
            {
                link: `${deposits}/products`,
                subtitle: 'Депозитные продукты',
            },
        ],
    },

    {
        link: investing,
        icon: <ShowChartOutlinedIcon />,
        title: 'Инвестирование',
        sublink: [{ link: `${investing}`, subtitle: 'Мои инвестиции' }],
    },
    {
        link: insurance,
        icon: <MedicalServicesOutlinedIcon />,
        title: 'Страхование',
        sublink: [{ link: `${insurance}`, subtitle: 'Мои страховки' }],
    },
    {
        link: deals,
        icon: <LocalOfferOutlinedIcon />,
        title: 'Сделки и предложения',
        sublink: [{ link: `${deals}`, subtitle: 'Мои сделки' }],
    },
]
