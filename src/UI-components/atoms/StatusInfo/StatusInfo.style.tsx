import type { SxProps, Theme } from '@mui/material'

import type { StatusInfoStylesProps } from './StatusIfo.type'

export const statusInfoStyles: (
    props: StatusInfoStylesProps
) => SxProps<Theme> =
    ({ status }) =>
    (theme) => {
        const { Error, Success, Warning } = theme.palette.SystemColor

        return {
            padding: theme.spacing(1.5, 3),
            position: 'relative',
            top: '-5px',
            textTransform: 'lowercase',
            borderRadius: '20px',
            '&:first-letter': {
                textTransform: 'uppercase',
            },
            ...(status.match(/reject/i) && {
                color: Error,
                background: `${Error}33`,
            }),
            ...(status.match(/pending/i) && {
                background: `${Warning}33`,
                color: Warning,
            }),
            ...(status.match(/approved/i) && {
                background: `${Success}33`,
                color: Success,
            }),
        }
    }
