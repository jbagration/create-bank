export interface TabsProps {
    onTabChange?: (newTabIndex: number) => void
    labels: string[]
    selectedTabIndex?: number
    padding?: boolean
    small?: string
    tabNumber?: number
}

export interface TabsStylesProps extends Pick<TabsProps, 'padding' | 'small'> {}
