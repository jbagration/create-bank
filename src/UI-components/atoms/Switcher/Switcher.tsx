import { FC, useState } from 'react'
import { FormControlLabel, Grid, Switch, Typography } from '@mui/material'

import { SwitchLabel } from './SwitchLabel/SwitchLabel'
import type { SwitcherProps } from './Switcher.type'

import { switcherStyles } from './Switcher.style'

export const Switcher: FC<SwitcherProps> = ({
    disableRipple = true,
    title,
    isDisabled,
    isToggled,
    handleClick,
}) => {
    const [isSwitchToggled, setIsSwitchToggled] = useState(isToggled)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSwitchToggled(event.target.checked)
        handleClick()
    }

    return (
        <Grid container alignItems="center">
            <Grid item xs={3}>
                <Typography variant="body2" mr={8}>
                    {title}
                </Typography>
            </Grid>
            <Grid>
                <FormControlLabel
                    control={
                        <Switch
                            sx={switcherStyles}
                            disabled={isDisabled}
                            checked={isSwitchToggled}
                            onChange={handleChange}
                            value={isSwitchToggled}
                            disableRipple={disableRipple}
                        />
                    }
                    label={<SwitchLabel isSwitchToggled={isSwitchToggled} />}
                />
            </Grid>
        </Grid>
    )
}
