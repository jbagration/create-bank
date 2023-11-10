export interface ClipboardProps {
    title: string | boolean | undefined
    subtitle: string
    copy?: boolean
    leftTop?: string
    leftBottom?: string
    rightTop?: string
    rightBottom?: string
    topBorder?: boolean
    rightBorder?: boolean
    leftBorder?: boolean
    bottomBorder?: boolean
    textLarge?: boolean
    center?: boolean
    fullWidth?: boolean
    textCenter?: boolean
    loanDetails?: boolean
    padding?: string
    flexCenter?: boolean
    size?: number
    flex?: boolean
}

export interface SubtitleProps extends Pick<ClipboardProps, 'center'> {}

export interface TitleContainerStylesProps
    extends Pick<ClipboardProps, 'flexCenter'> {}
