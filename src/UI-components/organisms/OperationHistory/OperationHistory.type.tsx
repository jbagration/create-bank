import { TransferOrdersItem } from '../../molecules'

export interface OperationHistoryProps extends TransferOrdersItem {
    error?: object
    setSize: Function
}
