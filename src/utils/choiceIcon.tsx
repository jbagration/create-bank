import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'

import { Cards } from '../assets/svg'

export const choiceIcon = (operation: string, large?: boolean) => {
    switch (true) {
        case /карт/i.test(operation) || /card/i.test(operation):
            return large ? <Cards /> : <CreditCardIcon />

        case /телефон/i.test(operation) || /phone/i.test(operation):
            return <PhoneIphoneIcon fontSize={large ? 'large' : 'medium'} />

        case /коммунальные услуги/i.test(operation):
            return <HomeWorkOutlinedIcon fontSize="large" />

        case /валют/i.test(operation):
            return <CurrencyExchangeOutlinedIcon fontSize="large" />

        case /добавить/i.test(operation):
            return <AddOutlinedIcon fontSize="large" />

        default:
            return <CreditCardIcon />
    }
}
