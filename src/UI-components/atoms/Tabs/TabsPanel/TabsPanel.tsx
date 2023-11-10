import { FC } from 'react'

import { TabsPanelProps } from './TabsPanel.type'

export const TabsPanel: FC<TabsPanelProps> = ({
    thisTabIndex,
    selectedTabIndex,
    children,
}) => <>{thisTabIndex === selectedTabIndex && children}</>
