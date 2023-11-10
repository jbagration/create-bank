import type { SxProps, Theme } from '@mui/material'

import type { StypperStyledProps } from '../Stepper.type'

export const stepLabelStyles: (props: StypperStyledProps) => SxProps<Theme> =
    ({ stepperVariant }) =>
    (theme) => {
        const { BackgroundSecondary } = theme.palette.BackGray
        const { TextPrimary } = theme.palette.Text

        return {
            '&.MuiStepLabel-root': {
                flexDirection: 'column-reverse',
                alignItems: 'flex-start',
                width: '128px',
                marginTop: '20px',
            },
            '&.MuiStepLabel-root .MuiStepLabel-alternativeLabel': {
                textAlign: 'start',
                marginBottom: '3px',
                color: BackgroundSecondary,
            },
            '&.MuiStepLabel-root .Mui-completed': {
                color: TextPrimary,
            },
            ...(stepperVariant === 'ThreeStepsPassword' && {
                '& .MuiTypography-root': {
                    width: '165px',
                    letterSpacing: '0',
                    wordSpacing: '0',
                    whiteSpace: 'pre-wrap',
                },
            }),
            ...(stepperVariant === 'ThreeStepsReg' && {
                '& .MuiTypography-root': {
                    width: 150,
                    letterSpacing: '-1px',
                    wordSpacing: '2px',
                    whiteSpace: 'pre-wrap',
                },
            }),
            ...(stepperVariant === 'FourSteps' && {
                '& .MuiTypography-root': {
                    width: 100,
                    wordSpacing: '2px',
                    whiteSpace: 'pre-wrap',
                },
                '& .MuiStepLabel-label': {
                    '& p:': {
                        width: '153px',
                    },
                },
            }),
        }
    }
