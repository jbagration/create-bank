import { SxProps, Theme } from '@mui/material'

type BoxProps = {
    open: boolean
}

export const transferIconStyles: (props: BoxProps) => SxProps<Theme> =
    ({ open = false }) =>
    (theme) => {
        return {
            height: '51px',
            width: '51px',
            transition: '0.5s ease 0s',
            ...(open
                ? {
                      background:
                          theme.palette.BackStandart.BackgroundQuaternary,
                      color: theme.palette.Text.TextSenary,
                  }
                : {
                      background: theme.palette.BackStandart.BackgroundSenary,
                      color: theme.palette.Text.TextPrimary,
                  }),

            '&:hover': {
                backgroundColor: theme.palette.BackStandart.BackgroundSeptenary,
                color: theme.palette.Text.TextPrimary,
            },
        }
    }
