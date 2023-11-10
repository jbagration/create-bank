import { SxProps } from '@mui/material'

import { StypperStyledProps } from '../Stepper.type'

export const stepperStyles: (props: StypperStyledProps) => SxProps = ({
    stepperVariant,
}) => ({
    width: '700px',
    '& .MuiStep-root:nth-last-child(1)': {
        '& .MuiStepLabel-label': {
            display: 'none',
        },
    },
    ...(stepperVariant === 'ThreeStepsReg' && {
        '& .MuiStep-root:nth-last-child(2)': {
            '& .MuiStepLabel-label': {
                '& .MuiTypography-root': {
                    width: '220px',
                },
            },
        },
        '& .MuiStep-root:last-child': {
            '& .MuiStepConnector-line': {
                marginRight: '49px',
            },
        },
    }),
    ...(stepperVariant === 'FourSteps' && {
        width: '700px',
        '& .MuiStep-root:nth-last-child(2)': {
            '& .MuiStepLabel-label': {
                width: '180px',
                wordSpacing: '-5px',

                '& .MuiTypography-root': {
                    width: '153px',
                },
            },
        },
    }),
})
