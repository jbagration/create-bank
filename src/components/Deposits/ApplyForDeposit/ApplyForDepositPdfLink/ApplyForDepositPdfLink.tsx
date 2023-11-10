import { TextLinkIcon } from 'src/assets'
import { Box, IconButton, Typography } from '@mui/material'

import {
    iconButtonStyles,
    textDepositStyles,
    textStyles,
} from './ApplyForDepositPdfLink.style'

export const ApplyForDepositPdfLink = () => {
    return (
        <Box sx={textDepositStyles.container}>
            <Box sx={textDepositStyles.boxMain}>
                <Box sx={textDepositStyles.btnImg}>
                    <a
                        href={require('src/assets/pdf/depositConditionsFull.pdf')}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconButton
                            aria-label="iconTextLink"
                            sx={iconButtonStyles}
                        >
                            <TextLinkIcon />
                        </IconButton>
                    </a>
                </Box>
                <Typography variant="body2" sx={textStyles}>
                    Полные условия выбранного депозитного продукта
                </Typography>
            </Box>
            <Box sx={textDepositStyles.boxMain}>
                <Box sx={textDepositStyles.btnImg}>
                    <a
                        href={require('src/assets/pdf/depositConditionsBasic.pdf')}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconButton
                            aria-label="iconTextLink"
                            sx={iconButtonStyles}
                        >
                            <TextLinkIcon />
                        </IconButton>
                    </a>
                </Box>
                <Typography variant="body2" sx={textStyles}>
                    Общие условия размещения средств во вклад
                </Typography>
            </Box>
        </Box>
    )
}
