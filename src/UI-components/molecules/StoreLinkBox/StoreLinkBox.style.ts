import { SxProps, Theme } from '@mui/material/styles'

import { StoreLinkBoxPropsStyles } from './StoreLinkBox.type'

export const storeLinkBoxStyles: (
    props: StoreLinkBoxPropsStyles
) => SxProps = ({ isMinified, isMain }) => {
    return {
        bottom: '24px',
        ...(isMinified
            ? {
                  display: 'flex',
                  justifyContent: 'space-between',
                  right: '72px',
                  width: '255px',
              }
            : {
                  right: '106px',
                  width: '340px',
              }),
        position: isMain ? 'absolute' : isMinified ? 'absolute' : 'static',
        zIndex: '50',
    }
}

export const storeLinkStyles: (props: StoreLinkBoxPropsStyles) => SxProps = ({
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

export const linkStyles = (): SxProps<Theme> => (theme) => {
    return {
        color: theme.palette.BackGray.BackgoundDark,
        textDecorationColor: theme.palette.BackGray.BackgoundDark,
    }
}

export const storeTitleStyles =
    (props: StoreLinkBoxPropsStyles): SxProps<Theme> =>
    (theme) => {
        const { isMinified } = props

        return {
            color: theme.palette.Text.TextSecondary,
            ...(isMinified
                ? {
                      order: 1,
                  }
                : {
                      textAlign: 'center',
                      marginBottom: '16px',
                  }),
        }
    }

export const storeLinkImagesBoxStyles: (
    props: StoreLinkBoxPropsStyles
) => SxProps = ({ isMinified }) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        width: isMinified ? '56px' : '100%',
    }
}
