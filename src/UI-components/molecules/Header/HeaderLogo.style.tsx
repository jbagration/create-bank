import { SxProps } from '@mui/system'

import CreateBankDarkLogo from './CreateBankDark.svg'
import CreateBankLightLogo from './CreateBankLight.svg'

import type { HeaderProps } from './Header.type'

export const headerLogoStyles: (
    props: HeaderProps & { theme: 'dark' | 'light'; isAuthenticated: boolean }
) => SxProps = ({ main, theme, isAuthenticated }) => {
    let logo = CreateBankDarkLogo

    const currentPath = window.location.pathname

    if (
        (!isAuthenticated && currentPath === '/bank_branch') ||
        (!isAuthenticated && currentPath === '/exchange_rate') ||
        (!isAuthenticated && currentPath === '/contact')
    ) {
        logo = CreateBankLightLogo
    } else if (
        (!isAuthenticated && currentPath !== '/bank_branch') ||
        (!isAuthenticated && currentPath !== '/exchange_rate') ||
        (!isAuthenticated && currentPath !== '/contact')
    ) {
        logo = CreateBankDarkLogo
    } else {
        logo = theme === 'light' ? CreateBankLightLogo : CreateBankDarkLogo
    }

    return {
        marginLeft: main ? '72px' : '18px',
        width: '152px',
        height: '44px',
        background: `url(${logo}) center no-repeat`,
        transition: 'transform 2s ease-in-out',
        cursor: 'pointer',
    }
}
