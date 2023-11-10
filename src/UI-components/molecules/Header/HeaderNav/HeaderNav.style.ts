import type { SxProps } from '@mui/material'

import type { HeaderNavStylesProps } from './HeaderNav.type'

export const headerNavContainerStyles: (
    props: HeaderNavStylesProps
) => SxProps = ({ user }) => {
    return {
        flexGrow: 2,
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '20px',
        marginRight: user ? '38px' : '72px',
        alignItems: 'center',
    }
}
