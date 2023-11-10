import type { SxProps, Theme } from '@mui/material'

import type { CreditDetailsWrapperProps } from './CreditDetailsWrapper.type'

export const creditWrapperStyles =
    (props: CreditDetailsWrapperProps): SxProps<Theme> =>
    (theme) => {
        const {
            leftTop = 0,
            rightTop = 0,
            leftBottom = 0,
            rightBottom = 0,
            bottomBorder = true,
            leftBorder = true,
            rightBorder = true,
            topBorder = true,
            containerHeight = false,
            paddingSmall = false,
            fullWidth = false,
            textCenter = false,
            flex = false,
            padding,
        } = props

        return {
            ...(flex && {
                display: 'flex',
            }),
            ...(bottomBorder && {
                borderBottom: '1px solid',
            }),
            ...(topBorder && {
                borderTop: '1px solid',
            }),
            ...(leftBorder && {
                borderLeft: '1px solid',
            }),
            ...(rightBorder && {
                borderRight: '1px solid',
            }),
            ...(containerHeight && {
                height: '100%',
            }),
            ...(fullWidth && {
                width: '100%',
            }),
            ...(paddingSmall
                ? {
                      padding: '24px 40px',
                  }
                : {
                      padding: '32px 40px',
                  }),
            borderRadius: `${leftTop}px ${rightTop}px ${rightBottom}px ${leftBottom}px`,

            borderColor: theme.palette.BackGray.BackgroundSlider,
            ...(textCenter && {
                textAlign: 'center',
            }),
            ...(padding && {
                padding: `${padding}`,
            }),
        }
    }
