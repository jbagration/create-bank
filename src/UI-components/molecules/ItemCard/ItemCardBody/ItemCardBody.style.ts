import { SxProps, Theme } from '@mui/material'

import { ExpirationDateStylesProps } from './ItemCardBody.type'

export const expirationDateStyles: (
    props: ExpirationDateStylesProps
) => SxProps<Theme> =
    ({ mini }) =>
    (theme) => {
        const { body2 } = theme.typography

        return {
            ...body2,
            marginBottom: 'auto',
            ...(mini && {
                height: '5px',
                fontSize: '4px',
                fontWeight: 400,
                lineHeight: '5px',
            }),
        }
    }
