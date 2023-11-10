import { RadioProps as MuiRadioProps } from '@mui/material'

interface StyledRadioButtonProps {
    isError?: boolean
}

type RadioProps = Omit<MuiRadioProps, 'name'> & {
    name: string
}

export type RadioButtonProps = RadioProps & StyledRadioButtonProps
