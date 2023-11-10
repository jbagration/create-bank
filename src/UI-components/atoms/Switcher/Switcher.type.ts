import type { SwitchProps as MuiSwitchProps } from '@mui/material'

export interface SwitcherProps extends MuiSwitchProps {
    title: string
    isToggled: boolean
    isDisabled?: boolean
    handleClick: Function
}
