import { UserDto } from 'src/models'
import { Grid, Typography } from '@mui/material'

import { UserProfileLanguage } from './UserProfileLanguage/UserProfileLanguage'
import { UserProfileTheme } from './UserProfileTheme/UserProfileTheme'

import {
    settingsColumnStyles,
    settingsTabColumnStyles,
} from './SettingsTab.style'

interface ProfileSettingsColProps {
    user: UserDto
}

export const ProfileSettingsCol = ({ user }: ProfileSettingsColProps) => {
    const profileTheme = user.profileSettings?.profileTheme
    const profileLanguage = user.profileSettings?.profileLanguage

    return (
        <Grid sx={settingsTabColumnStyles}>
            <Typography variant="buttonMedium">Настройки профиля</Typography>
            <Grid sx={settingsColumnStyles}>
                {profileLanguage !== undefined &&
                    profileTheme !== undefined && (
                        <>
                            <UserProfileLanguage
                                profileLanguage={profileLanguage}
                                profileTheme={profileTheme}
                            />
                            <UserProfileTheme profileTheme={profileTheme} />
                        </>
                    )}
            </Grid>
        </Grid>
    )
}
