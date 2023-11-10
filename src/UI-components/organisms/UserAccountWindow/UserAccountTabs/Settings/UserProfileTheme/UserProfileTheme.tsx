import { UserProfileSettingsDto } from 'src/models'
import { useUpdateProfileThemeMutation } from 'src/redux/api/userApi'
import { useAppDispatch } from 'src/redux/hooks/redux'
import { setUserProfileTheme } from 'src/redux/slices/auth'
import { Switch, Typography } from '@mui/material'

import { ReactComponent as MoonIcon } from 'src/assets/svg/UserProfileTheme/MoonIcon.svg'
import { ReactComponent as SunIcon } from 'src/assets/svg/UserProfileTheme/SunIcon.svg'

import {
    ContainerBox,
    SwitchStyle,
    TypographyStyle,
} from './UserProfileTheme.style'

export const UserProfileTheme = ({
    profileTheme,
}: Partial<Pick<UserProfileSettingsDto, 'profileTheme'>>) => {
    const dispatch = useAppDispatch()
    const [updateTheme] = useUpdateProfileThemeMutation()

    const handleThemeChange = () => {
        const newTheme = profileTheme === 'DARK' ? 'LIGHT' : 'DARK'

        dispatch(
            setUserProfileTheme({
                profileTheme: newTheme,
            })
        )
        updateTheme(newTheme)
    }

    return (
        <ContainerBox>
            <TypographyStyle>
                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: 'Roboto',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0px',
                        textAlign: 'left',
                        paddingRight: '40px',
                    }}
                >
                    Тема
                </Typography>
            </TypographyStyle>
            <SwitchStyle>
                <Switch
                    checked={profileTheme === 'LIGHT'}
                    onChange={handleThemeChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'toggle theme' }}
                />
                {profileTheme === 'LIGHT' ? <SunIcon /> : <MoonIcon />}
            </SwitchStyle>
            <TypographyStyle>
                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: 'Roboto',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '20px',
                        letterSpacing: '0px',
                        textAlign: 'left',
                        color: profileTheme === 'LIGHT' ? '#EDC700' : '#9E9E9E',
                    }}
                >
                    {profileTheme === 'LIGHT' ? 'СВЕТЛАЯ' : 'ТЕМНАЯ'}
                </Typography>
            </TypographyStyle>
        </ContainerBox>
    )
}
