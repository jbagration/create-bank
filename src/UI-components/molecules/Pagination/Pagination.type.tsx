export interface PaginationProps {
    size: number
    next?: boolean
    count: number
    setCount: Function
    dataLength: number
    error?: Object
}
