import type { SxProps } from '@mui/material'

import type { StoreLinkProps } from './StoreLink.type'

export const storeLinkStyled: (props: StoreLinkProps) => SxProps = ({
    isMinified,
}) => {
    return {
        backgroundSize: 'cover',
        ...(isMinified
            ? {
                  width: '20px',
                  height: '24px',
              }
            : {
                  width: '152px',
                  height: '46px',
              }),
    }
}
