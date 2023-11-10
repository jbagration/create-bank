import React, { FC, memo, useState } from 'react'
import { useAppDispatch } from 'src/redux/hooks/redux'
import { setTabNumber } from 'src/redux/slices/myCardsSlice'

import { Tabs } from '../Tabs'
import type { TabsProps } from '../Tabs.type'
import { TabsPanel } from '../TabsPanel/TabsPanel'

export const TabsWithContent: FC<Omit<TabsProps, 'selectedTabIndex'>> = memo(
    ({ labels, onTabChange, padding = false, children, small, tabNumber }) => {
        const [activeTab, setActiveTab] = useState(tabNumber ?? 0)
        const dispatch = useAppDispatch()

        const handleTabChange = (newTabIndex: number) => {
            setActiveTab(newTabIndex)
            onTabChange && onTabChange(newTabIndex)
            dispatch(setTabNumber(newTabIndex))
        }

        return (
            <>
                <Tabs
                    small={small}
                    labels={labels}
                    selectedTabIndex={activeTab}
                    onTabChange={handleTabChange}
                    padding={padding}
                />
                {React.Children.map(children, (child, i) => (
                    <TabsPanel
                        key={i}
                        selectedTabIndex={activeTab}
                        thisTabIndex={i}
                    >
                        {child}
                    </TabsPanel>
                ))}
            </>
        )
    }
)
