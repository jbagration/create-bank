import { SxProps, Theme } from '@mui/material/styles'

import { InputStyledProps, InputWrapperProps } from './Input.type'

export const InputWrapperStyled: (props: InputWrapperProps) => SxProps = ({
    gridColumn,
    type,
}) => {
    return {
        marginBottom: '8px',
        ...(gridColumn && { gridRow: 1 }),
        gridColumn,
        ...(type === 'smsCode' && {
            paddingTop: '16px',
            position: 'relative',
        }),
        ...(type === 'number' && {
            marginBottom: 0,
        }),
        ...(type === 'tel' && {
            ':nth-child(2n)': {
                marginBottom: 0,
            },
        }),
    }
}

export const InputStyled =
    (props: InputStyledProps): SxProps<Theme> =>
    (theme) => {
        const {
            size,
            isEmptyInput,
            type,
            dropdown,
            multiline,
            initialType,
            outlined,
            autosize = 'false',
            smallHeight = 'false',
            gridColumn,
            select,
            customMenuPosition,
        } = props

        const {
            BackStandart: {
                BackgroundPrimary: BackgroundPrimaryStandart,
                BackgroundQuaternary,
            },
            BackGray: {
                BackgroundPrimary: BackgroundPrimaryGray,
                BackgroundSecondary,
                BackgroundHover,
                BackgoundFilterHover,
            },
            BackAccent: { BackgroundSecondary: BackgroundSecondaryAccent },
            SystemColor: { Error },
            Text: { TextPrimary, TextTertiary, TextDisabled },
        } = theme.palette

        return {
            ...(gridColumn && { gridRow: 2 }),
            gridColumn,
            borderRadius: '2px',
            backgroundColor: BackgroundPrimaryStandart,
            ...(size === 'long' && {
                width: '343px',
            }),
            ...(size === 'short' && {
                width: '159px',
            }),
            ...(autosize === 'true' && {
                width: '100%',
            }),
            '& label.Mui-focused': {
                color: TextTertiary,
            },
            '& label.MuiFormLabel-root': {
                color: TextTertiary,
            },
            '& .MuiOutlinedInput-root': {
                ...(dropdown && { cursor: 'pointer' }),
                '& svg': {
                    fill: BackgroundQuaternary,
                    cursor: 'pointer',
                    display: isEmptyInput && !dropdown ? 'none' : 'block',
                },
                ...(multiline && {
                    padding: '12px',
                    minHeight: '48px',
                    textarea: {
                        ':focus': {
                            '&::placeholder': {
                                color: 'transparent',
                            },
                        },
                        color: TextPrimary,
                    },
                }),

                fieldset: {
                    ...(outlined === 'true'
                        ? {
                              border: 'none',
                              borderBottom: '2px solid',
                              borderColor: BackgroundSecondary,
                              borderRadius: '0',
                          }
                        : {
                              borderColor: BackgroundSecondary,
                              borderWidth: '1px',
                              borderRadius: '2px',
                          }),
                    ...(gridColumn && { gridRow: 2 }),
                    gridColumn,
                },

                '&:hover': {
                    fieldset: {
                        borderColor: TextTertiary,
                    },
                },
                '&.Mui-focused': {
                    '& svg': {
                        display: 'block',
                        path: {
                            fill: !select && TextPrimary,
                        },
                    },
                    fieldset: {
                        borderColor: BackgroundSecondary,
                        borderWidth: '2px',
                    },
                    '&.Mui-error': {
                        '& svg': {
                            display: 'block',
                        },
                        fieldset: {
                            borderColor: Error,
                        },
                    },
                },
                '&.Mui-disabled': {
                    fieldset: {
                        borderColor: BackgroundHover,
                    },
                    '& svg': {
                        cursor: 'initial',
                        path: {
                            fill: BackgroundSecondary,
                        },
                    },
                    '&.Mui-error ': {
                        '& svg': {
                            display: 'none',
                        },
                    },
                },
                '&.Mui-error': {
                    '& svg': {
                        margin: 0,
                        display: 'block',
                        ...(initialType !== 'password' && {
                            path: {
                                fill: Error,
                            },
                        }),
                        ...(type === 'tel' && { width: '24px' }),
                    },
                    fieldset: {
                        borderWidth: '1px',
                        borderColor: Error,
                    },
                },
                input: {
                    '&[readonly]': {
                        cursor: 'default',
                    },
                    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
                        {
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: TextPrimary,
                            caretColor: TextPrimary,
                            WebkitBoxShadow: `inset ${BackgroundPrimaryGray}`,
                            transition: 'background-color 5000s ease-in-out 0s',
                        },
                    padding: theme.spacing(3),
                    color: TextPrimary,
                    ...theme.typography.body1,
                    height: '24px',
                    '&::placeholder': {
                        ...theme.typography.body1,
                        color: TextDisabled,
                        opacity: 1,
                    },
                    ...(smallHeight === 'true' && {
                        padding: '6px 12px',
                    }),
                    ':focus': {
                        '&::placeholder': {
                            color: dropdown ? '' : 'transparent',
                        },
                    },
                    ':disabled': {
                        WebkitTextFillColor: TextDisabled,
                    },
                },
            },
            ...(select && {
                width: '200px',
                '& .MuiSelect-select': {
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    '& svg': {
                        display: 'flex',
                        marginRight: '8px',
                        boxShadow: 2,
                    },
                },
                '.MuiOutlinedInput-root': {
                    '& .MuiSvgIcon-root': { display: 'block' },
                },
                ...(customMenuPosition && {
                    '.MuiPopover-root.MuiMenu-root.MuiModal-root': {
                        position: 'absolute',
                        top: '48px',
                        left: 0,
                        minHeight: '196px',
                    },
                    '.MuiPaper-root.MuiMenu-paper': {
                        position: 'sticky',
                        minHeight: '100%',
                    },
                }),
            }),

            '.MuiTypography-root': {
                color: TextDisabled,
            },
            '.MuiList-root': {
                backgroundColor: BackgroundPrimaryStandart,
                '.MuiButtonBase-root.MuiMenuItem-root': {
                    '&:hover': {
                        backgroundColor: BackgoundFilterHover,
                    },
                    '&.Mui-selected, &.Mui-selected:hover, &.Mui-focusVisible':
                        {
                            backgroundColor: BackgroundSecondaryAccent,
                        },
                },
            },
        }
    }

export const inputTelMenustyles = (theme: Theme) => {
    const {
        BackStandart: { BackgroundPrimary: BackgroundPrimaryStandart },
        Text: { TextDisabled, TextPrimary },
        BackAccent: {
            BackgroundHover,
            BackgroundSecondary,
            BackgroundPrimary: BackgroundPrimaryAccent,
        },
    } = theme.palette

    return {
        '.MuiList-root': {
            backgroundColor: BackgroundPrimaryStandart,
            color: TextDisabled,
        },
        '.MuiMenu-list': {
            border: `1px solid ${TextPrimary}`,
            borderRadius: '4px',
            borderColor: '#fff',
        },
        '.MuiButtonBase-root.MuiMenuItem-root': {
            '&:hover': {
                backgroundColor: BackgroundHover,
            },
            '&.Mui-selected': {
                backgroundColor: BackgroundSecondary,
            },

            '&.Mui-selected:hover': {
                backgroundColor: BackgroundPrimaryAccent,
            },
        },
    }
}

export const boxCounterStyles = (theme: Theme) => {
    return {
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'flex-end',
        color: theme.palette.SystemColor.Warning,
    }
}

export const iconVisibilityOnStyles = {
    position: 'absolute',
    top: '17px',
    right: '2px',
}

export const iconVisibilityOffStyles = {
    position: 'absolute',
    top: '16px',
    right: '2px',
}

export const boxUnderInputStyles = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingTop: '8px',
    gap: '8px',
}
