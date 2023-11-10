import { FC } from 'react'
import { Grid } from '@mui/material'

import { TabsWithContent } from '../../atoms'

import {
    GeneralInfoTab,
    NotificationsTab,
    SecurityTab,
    SettingsTab,
} from './UserAccountTabs'

import { userAccountWindowLabels as labels } from './UserAccountWindow.const'

import { userAccountWindowStyles } from './UserAccountWindow.style'

export const UserAccountWindow: FC = () => {
    return (
        <Grid sx={userAccountWindowStyles}>
            <TabsWithContent labels={labels} padding>
                <GeneralInfoTab />
                <SecurityTab />
                <NotificationsTab />
                <SettingsTab />
            </TabsWithContent>
        </Grid>
    )
}
