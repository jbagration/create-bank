import { Dispatch, FC, SetStateAction } from 'react'
import { descriptionStyles, switcherBoxStyles } from 'src/common/common.styles'
import { Box, Grid, Switch, Typography } from '@mui/material'

import { yellowSwitchStyles } from './ApplyForDepositSwitch.style'

interface ApplyForDepositSwitchProps {
    textPrimary: string
    textSecondary: string
    checked: boolean
    setChecked: Dispatch<SetStateAction<boolean>>
}

export const ApplyForDepositSwitch: FC<ApplyForDepositSwitchProps> = ({
    textPrimary,
    textSecondary,
    checked,
    setChecked,
}) => (
    <Grid item>
        <Box sx={switcherBoxStyles}>
            <Box>
                <Typography variant="body1">{textPrimary}</Typography>
                <Typography sx={descriptionStyles} variant="body1">
                    {textSecondary}
                </Typography>
            </Box>
            <Switch
                sx={yellowSwitchStyles}
                checked={checked}
                onChange={() => setChecked((prev) => !prev)}
            />
        </Box>
    </Grid>
)
