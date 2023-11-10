import { Theme } from '@mui/material'

export const renderCustomHeaderContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',
}

export const listStyles = (theme: Theme) => {
    return {
        border: `1px solid ${theme.palette.BackGray.BackgroundSlider}`,
        borderRadius: '6px',
        maxHeight: '200px',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: theme.palette.BackStandart.BackgroundPrimary,
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '100vw',
            backgroundColor: theme.palette.BackGray.BackgroundPrimary,
            border: '4px solid white',
        },
        '&::-webkit-scrollbar': {
            width: '16px',
        },

        '&::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.BackStandart.BackgroundPrimary,
        },
    }
}

export const listItemStyles =
    (props: { isChosen: boolean }) => (theme: Theme) => {
        const { isChosen } = props

        return {
            cursor: 'pointer',
            ...(isChosen
                ? {
                      backgroundColor: theme.palette.BackAccent.BackgroundHover,
                      borderRadius: '20px',
                  }
                : {
                      borderRadius: '20px',
                      '&:hover': {
                          backgroundColor:
                              theme.palette.BackAccent.BackgroundTertiary,
                      },
                  }),
        }
    }

export const collapseStyles = {
    position: 'absolute',
    zIndex: 2,
}
