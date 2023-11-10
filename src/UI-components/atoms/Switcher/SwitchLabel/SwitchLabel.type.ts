export interface SwitchLabelProps {
    isSwitchToggled: boolean
}

export interface SwitchLabelStylesProps
    extends Pick<SwitchLabelProps, 'isSwitchToggled'> {}
