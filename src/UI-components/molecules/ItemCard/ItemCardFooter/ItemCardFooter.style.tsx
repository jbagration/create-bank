import { SxProps, Theme } from '@mui/material'

export const cardFooterStyle: (props: boolean) => SxProps<Theme> =
    (mini) => (theme) => {
        const { subtitle2, fontWeightBold } = theme.typography

        return {
            ...subtitle2,
            fontWeight: fontWeightBold,
            ...(mini && {
                height: '5px',
                fontSize: '4px',
                lineHeight: '5px',
            }),
        }
    }
