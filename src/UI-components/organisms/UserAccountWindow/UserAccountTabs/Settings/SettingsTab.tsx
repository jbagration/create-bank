import { FC } from 'react'
import { Preloader } from 'src/assets/svg'
import { useLazySetUserProfileSettingsQuery } from 'src/redux/api/userApi'
import { useAppSelector } from 'src/redux/hooks/redux'
import { Grid } from '@mui/material'

import { ProfileAvatarCol } from './ProfileAvatarCol'
import { ProfileSettingsCol } from './ProfileSettingsCol'

import { userAccountTabBox } from '../UserAccountTabBox.style'

import { TabBoxProps } from '../UserAccountTabBox.type'

export const SettingsTab: FC<TabBoxProps> = () => {
    const user = useAppSelector((state) => state.auth.user)
    const [setProfileSettings, { isLoading }] =
        useLazySetUserProfileSettingsQuery()

    if (isLoading || !user) {
        return <Preloader />
    }

    const userAccountTabBoxStyles = userAccountTabBox({ labelPadding: false })
    return (
        <Grid sx={userAccountTabBoxStyles}>
            <ProfileAvatarCol
                user={user}
                setProfileSettings={setProfileSettings}
            />
            <ProfileSettingsCol user={user} />
        </Grid>
    )
}
