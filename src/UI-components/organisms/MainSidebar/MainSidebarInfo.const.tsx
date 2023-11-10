import ContactsIcon from '@mui/icons-material/Contacts'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'

const bank_branch = 'bank_branch'
const exchange_rate = 'exchange_rate'
const contact = 'contact'

export const SidebarInfoLinks = [
    {
        link: bank_branch,
        icon: <LocalLibraryIcon />,
        title: 'Банкоматы и отделения',
    },
    {
        link: exchange_rate,
        icon: <CurrencyExchangeIcon />,
        title: 'Курсы валют',
    },
    {
        link: contact,
        icon: <ContactsIcon />,
        title: 'Контакты',
    },
]
