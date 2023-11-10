import { FC } from 'react'
import { Typography } from '@mui/material'

import { switchLabelStyles } from './SwitchLabel.styles'

import { SwitchLabelProps } from './SwitchLabel.type'

export const SwitchLabel: FC<SwitchLabelProps> = ({ isSwitchToggled }) => {
    const text = isSwitchToggled ? 'ВКЛ' : 'ВЫКЛ'

    const switchLabelStylesSx = switchLabelStyles({ isSwitchToggled })

    return <Typography sx={switchLabelStylesSx}>{text}</Typography>
}
