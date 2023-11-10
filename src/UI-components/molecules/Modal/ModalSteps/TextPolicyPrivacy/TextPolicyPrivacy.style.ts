import { Theme } from '@mui/material'

export const mainBoxStyles = {
    padding: '30px 20px',
    margin: 'auto',
    width: '100%',
    height: '100vh',
    backgroundImage:
        'linear-gradient( rgba(0, 0, 0, 0.75) 100%, rgba(0, 0, 0, 0.75)100%), url(/static/media/bg5.b74b02700f9cb13a407c.jpg);',
    backgroundSize: 'cover',
}

export const secondaryBoxStyles = {
    maxWidth: '1590px',
    height: '490px',
    margin: 'auto',
    zIndex: '1300',
    position: 'relative',
    top: '150px',
    right: 'unset',
    left: 'unset',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '8px',
    width: '803px',
    padding: '16px 16px 56px 16px',
    backgroundColor: 'white',
}

export const btnBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0',
}

export const contentBoxStyles = {
    maxWidth: '1590px',
    margin: 'auto',
    padding: '16px 69px 0 69px',
}

export const newIconStyles = () => (theme: Theme) => ({
    width: '24px',
    height: '24px',
    marginRight: 2,
    fill: theme.palette.BackGray.BackgroundSecondary,
})
