export interface FilterComponentProps {
    open: boolean
    setOpen: Function
}

export type FilterFormValues = Partial<{
    sum: number[]
    min_sum: number
    max_sum: number
    type_name: string
    operationType: string
    date: {
        from?: Date
        to?: Date
    }
    cardNumber: string
}>

export interface FilterCardItem {
    divider: boolean
    text: string
    cardNumber: string | undefined
}
