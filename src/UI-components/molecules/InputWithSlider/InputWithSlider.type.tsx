import { InputTypes } from '../../../types'

export interface InputWithSliderProps {
    name: string
    defaultValue: number | number[]
    type: InputTypes
    text?: string
    minValue: number
    maxValue: number
    label?: string
    readonly?: boolean
    withRange?: boolean
    captions?: boolean
    transformValue?: (value: string | number) => string | number
}

export interface inputSizeStylesProps {
    start?: string
}
