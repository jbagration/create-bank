export interface CardProductApplyModalProps {
    active: boolean
    onClose: () => void
}

export interface CardProductBoxStylesProps
    extends Pick<CardProductApplyModalProps, 'active'> {}
