import { BoxProps } from '@mui/material'

import { HeaderProps } from '../Header.type'

export type HeaderNavItemProps = Pick<BoxProps, 'sx'> &
    Pick<HeaderProps, 'main'> & {
        text: string
        to: string
        src?: string
        children?: JSX.Element
        onClick?: () => void
    }
