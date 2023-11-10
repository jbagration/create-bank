import { dialogClasses, SxProps, Theme } from '@mui/material'

import { ModalDialogStylesProps } from './NewDialog.type'

export const modalDialogStyles: (
    props: ModalDialogStylesProps
) => SxProps<Theme> =
    ({ type }) =>
    (theme) => {
        return {
            position: 'fixed',
            top: '50%',
            right: 'unset',
            bottom: 'unset',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: 2,
            ...(type === 'common' && {
                width: '803px',
            }),
            ...(type === 'congrats' && {
                width: '455px',
            }),
            ...(type === 'loginForm' && {
                width: '407px',
            }),
            [`& .${dialogClasses.paper}`]: {
                margin: 0,
                padding: '16px 16px 56px 16px',
                width: '803px',
                maxWidth: 'unset',
                maxHeight: 'unset',
                backgroundColor: theme.palette.Text.TextSecondary,
                borderRadius: 2,
                boxShadow: 'none',
                ...(type === 'common' && {
                    padding: '16px 16px 56px',
                    overflowY: 'visible',
                }),
                ...(type === 'congrats' && {
                    padding: '56px 56px 36px',
                }),
                ...(type === 'loginForm' && {
                    padding: '16px 16px 56px',
                }),
            },
            '@media screen and (max-width: 200%)': {
                width: '803px',
                [`& .${dialogClasses.paper}`]: {
                    width: '803px',
                },
            },
        }
    }
