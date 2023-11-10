export interface HistoryProps {
    size: number
    count: number
    dataLength: number
    changePrev: () => void
    changeNext?: () => void
    error?: object
    next?: boolean
}
