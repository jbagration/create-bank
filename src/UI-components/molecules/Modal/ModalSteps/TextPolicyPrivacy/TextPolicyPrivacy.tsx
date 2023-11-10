import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { Button } from '../../../../atoms'

import { textPolicy } from './TextPolicyPrivacy.const'

import {
    btnBoxStyles,
    contentBoxStyles,
    mainBoxStyles,
    secondaryBoxStyles,
} from './TextPolicyPrivacy.style'

export const TextPolicyPrivacy: FC = () => {
    const navigate = useNavigate()

    return (
        <Box sx={mainBoxStyles}>
            <Box sx={secondaryBoxStyles}>
                <Box sx={contentBoxStyles}>
                    <Typography variant="h4" color="black">
                        Политика конфиденциальности
                    </Typography>

                    <Typography
                        textAlign="justify"
                        marginTop="20px"
                        marginBottom="20px"
                        color="black"
                    >
                        {textPolicy}
                        <br />
                        {textPolicy}
                    </Typography>

                    <Box sx={btnBoxStyles}>
                        <Button
                            buttonVariant="primary"
                            size="long"
                            onClick={() => navigate(-1)}
                        >
                            Назад
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
