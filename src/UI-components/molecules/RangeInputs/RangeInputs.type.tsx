import { ChangeEvent } from 'react'

import { InputTypes } from '../../../types'

export interface RangeInputsProps {
    type: InputTypes
    maxName: string
    minName: string
    handleMaxChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    handleMinChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    maxValue: number
    minValue: number
}
