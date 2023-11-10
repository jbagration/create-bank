export interface ItemHistoryDateProps {
    time: string
    date: string
}

export interface HistoryDataTextStylesProps
    extends Pick<ItemHistoryDateProps, 'time'> {}
