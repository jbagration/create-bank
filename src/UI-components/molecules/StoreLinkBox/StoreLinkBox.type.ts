export interface StoreLinkBoxPropsStyles {
    isMinified: boolean
    isMain?: boolean
}

export interface StoreLinkBoxProps extends StoreLinkBoxPropsStyles {
    title?: string
    minified?: boolean
    main?: true
}

export interface StoreLinkProps {
    isMinified: boolean
}
