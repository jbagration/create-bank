import { ClipboardProps } from '../../../../UI-components/molecules/ClipboardComponent/ClipboardComponent.type'

export interface CreditDetailsWrapperProps
    extends Omit<ClipboardProps, 'title' | 'subtitle'> {
    containerHeight?: boolean
    paddingSmall?: boolean
}
