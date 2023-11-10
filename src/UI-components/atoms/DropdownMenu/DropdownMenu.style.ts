import { SxProps, Theme } from '@mui/material'

import {
    BoxProps,
    DropdownMenuProps,
    MyListItemProps,
    MyListProps,
} from './DropdownMenu.type'

export const menuItemStyles =
    (
        props: Pick<
            DropdownMenuProps & MyListItemProps,
            'size' | 'isChosen' | 'autosize' | 'height'
        >
    ): SxProps<Theme> =>
    (theme) => {
        const { size, isChosen, autosize, height = 'false' } = props

        return {
            '&': {
                ...theme.typography.body1,
                height: '56px',
                ...(size === 'long' && {
                    width: '343px',
                }),
                ...(size === 'short' && {
                    width: '159px',
                }),
                ...(autosize === 'true' && {
                    width: '100%',
                }),

                svg: {
                    display: 'none',
                },
                '&:hover': {
                    backgroundColor: theme.palette.BackGray.BackgroundSlider,
                },
            },

            '&.Mui-focusVisible': {
                backgroundColor: theme.palette.BackGray.BackgroundHover,
            },
            ...(isChosen && {
                backgroundColor: theme.palette.BackAccent.BackgroundQuaternary,
                svg: {
                    display: 'block',
                    ...(height === 'short' && {
                        marginRight: '10px',
                        fill: theme.palette.BackStandart.BackgroundQuaternary,
                    }),
                },
                '&:hover': {
                    backgroundColor:
                        theme.palette.BackAccent.BackgroundQuaternary,
                },
            }),
        }
    }

export const listStyles =
    (props: MyListProps): SxProps<Theme> =>
    (theme) => {
        const { isOpen, height, autosize = 'false' } = props

        return {
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '100vw',
                backgroundColor: theme.palette.BackGray.BackgroundPrimary,
                border: '2px solid',
                borderColor: theme.palette.BackStandart.BackgroundPrimary,
            },
            '&::-webkit-scrollbar': {
                width: '12px',
            },
            '&::-webkit-scrollbar-track': {
                backgroundColor: theme.palette.BackStandart.BackgroundPrimary,
            },
            display: 'none',
            zIndex: '100',
            width: '340px',
            backgroundColor: theme.palette.BackStandart.BackgroundPrimary,
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.12)',
            ...(isOpen && {
                display: 'block',
            }),
            ...(autosize === 'true' && {
                width: '100%',
            }),
            ...(height === 'short' && {
                maxHeight: '392px',
                overflowY: 'auto',
                overflowX: 'hidden',
            }),
        }
    }

export const boxStyles: (props: BoxProps) => SxProps<Theme> =
    ({ outlined }) =>
    (theme) => {
        return {
            marginBottom: outlined ? '44px' : 0,
            position: 'relative',
            color: theme.palette.Text.TextPrimary,
            width: 'fit-content',
            '&.MuiInputBase-root': {
                '& svg': {
                    display: 'none',
                },
            },
        }
    }

export const collapseStyles = {
    position: 'absolute',
    zIndex: 2,
    width: 'max-content',
}
