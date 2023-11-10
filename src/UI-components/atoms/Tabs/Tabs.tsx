import React, { FC, memo } from 'react'
import { Tab, Tabs as MuiTabs } from '@mui/material'

import type { TabsProps } from './Tabs.type'

import { tabsStyles } from './Tabs.style'

export const Tabs: FC<TabsProps> = memo(
    ({ labels, onTabChange, selectedTabIndex, padding, small }) => {
        const handleTabSelection = (
            _event: React.SyntheticEvent,
            newTabIndex: number
        ) => {
            if (onTabChange) {
                onTabChange(newTabIndex)
            }
        }

        const tabsStylesSx = tabsStyles({ padding, small })

        if (!labels.length) return null

        return (
            <MuiTabs
                sx={tabsStylesSx}
                variant="fullWidth"
                onChange={handleTabSelection}
                value={selectedTabIndex}
            >
                {labels.map((label, i) => (
                    <Tab
                        data-testid={`tab-${label}`}
                        disableRipple
                        label={label}
                        key={i}
                    />
                ))}
            </MuiTabs>
        )
    }
)
