export interface ItemObjectProps {
    cardTitle: string
    cardDescription: string
    cardBackground: string
    cardLink: string
}

export interface SliderItemProps {
    item: ItemObjectProps
}

export interface SliderPaperStylesProps
    extends Pick<ItemObjectProps, 'cardBackground'> {}
