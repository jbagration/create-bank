import { ChangeEvent } from 'react'

export type InputAmountProps = {
    name: string
    setResult?: (event: ChangeEvent, price: number) => void
    value: string
    onBlur?: () => void
}
