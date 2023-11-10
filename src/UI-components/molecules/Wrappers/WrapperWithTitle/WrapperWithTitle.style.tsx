import { SxProps, Theme } from '@mui/material'

import { WrapperStylesProps } from './WrapperWithTitle.type'

export const wrapperStyles: (props: WrapperStylesProps) => SxProps<Theme> =
    ({ title, loanCard, paymentTypeCard }) =>
    (theme) => {
        return {
            ...(title === 'Курсы валюты' && {
                height: '95.5%',
            }),
            ...(title === 'Мои карты' && {
                position: 'relative',
            }),
            border: `1px solid${theme.palette.grey[200]}`,
            ...(loanCard && {
                maxHeight: '320px',
            }),
            overflow: 'hidden',
            borderRadius: '8px',
            marginBottom: '36px',
            ...(paymentTypeCard && {
                marginBottom: '0',
            }),
        }
    }

export const wrapperTitleStyles = () => (theme: Theme) => {
    return {
        background: theme.palette.BackStandart.BackgroundOctonary,
        padding: '24px 32px',
        display: 'flex',
        justifyContent: 'space-between',
    }
}
