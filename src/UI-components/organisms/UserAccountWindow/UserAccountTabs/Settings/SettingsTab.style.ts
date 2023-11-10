import { grayColor } from 'src/themes/colors/gray'
import { yellowColor } from 'src/themes/colors/yellow'
import { Theme } from '@mui/material'

import { tabColumnStyles } from '../UserAccountTabBox.style'

export const settingsTabColumnStyles = (theme: Theme) => {
    return {
        ...tabColumnStyles,
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        color: theme.palette.Text.TextPrimary,
    }
}

export const errorTextStylesPhoto = (theme: Theme) => {
    return {
        paddingTop: '11px',
        fontSize: theme.typography.body2.fontSize,
        color: theme.palette.SystemColor.Error,
        top: '-15px',
        textWrap: 'nowrap',
        maxWidth: '200px',
    }
}

export const settingsColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
}

export const settingsAvatarBoxStyles = {
    position: 'relative',
    width: '144px',
    height: '144px',
    '&:hover .delete-button': {
        transition: 'background-color 0.3s ease',
        backgroundColor: yellowColor[300],
    },
}

export const settingsAvatarDeleteBtnStyles = {
    display: 'block',
    position: 'absolute',
    right: -10,
    opacity: 1,
    zIndex: 2,
    width: '48px',
    height: '48px',
    padding: '12px',
    borderRadius: '140px',
    gap: '10px',
    backgroundColor: yellowColor[100],
}

export const settingsBtnStyles = {
    width: '148px',
    height: '36px',
    padding: '8px 12px',
    borderRadius: '2px',
    backgroundColor: yellowColor[700],
    fontWeight: 500,
}

export const settingsBtnDeleteStyles = {
    width: '148px',
    height: '36px',
    padding: '8px 12px',
    marginTop: '-15px',
    borderRadius: '2px',
    backgroundColor: 'inherit',
    color: grayColor[700],
    fontWeight: 400,
    fontFamily: 'Roboto',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
}

export const buttonAvatarStyle = {
    width: '144px',
    height: '144px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    '&::before': {
        content: '"изменить фото"',
        color: '#fff',
        position: 'absolute',
        zIndex: 1,
        opacity: 0,
        padding: '25px',
        backgroundColor: '#212529',
        borderRadius: '50%',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'opacity 0.3s ease',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '20px',
        letterSpacing: '0.6px',
        textAlign: 'center',
    },
    '&:hover::before': {
        opacity: 0.7,
        cursor: 'pointer',
    },
}
