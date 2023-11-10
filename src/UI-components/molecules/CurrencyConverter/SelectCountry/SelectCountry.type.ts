import { ChangeEventHandler } from 'react'

export interface SelectCountryType {
    onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    countryCode: string
}
