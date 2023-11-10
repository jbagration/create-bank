import { InputProps } from '../Input'

export interface MyListItemProps {
    isChosen?: boolean
}

export interface ListItemData {
    text: string
    divider: boolean
}

export interface DropdownMenuProps
    extends Pick<
        InputProps,
        | 'label'
        | 'error'
        | 'errorMessage'
        | 'size'
        | 'placeholder'
        | 'staticLabel'
    > {
    options: ListItemData[]
    getValue?: (value: string) => void
    name?: string
    outlined?: string
    defaultValue?: string
    dropdown?: boolean
    autosize?: string
    height?: 'short'
    disabled?: boolean
}

export interface MyListProps extends Pick<DropdownMenuProps, 'height'> {
    isOpen?: boolean
    autosize?: string
}

export interface BoxProps {
    outlined?: string
}
