import React from 'react'
import { UserProfileSettingsDto } from 'src/models'
import { useUpdateProfileLanguageMutation } from 'src/redux/api/userApi'
import { useAppDispatch } from 'src/redux/hooks/redux'
import { setUserProfileLanguage } from 'src/redux/slices/auth'
import { Button } from 'src/UI-components/atoms'
import { ButtonGroup, Typography } from '@mui/material'

export const UserProfileLanguage = ({
    profileLanguage,
    profileTheme,
}: Partial<Pick<UserProfileSettingsDto, 'profileLanguage'>> & {
    profileTheme: string
}) => {
    const dispatch = useAppDispatch()
    const [updateLanguage] = useUpdateProfileLanguageMutation()

    const toggleLanguage = () => {
        const newLanguage = profileLanguage === 'RU' ? 'EN' : 'RU'

        dispatch(
            setUserProfileLanguage({
                profileLanguage: newLanguage,
            })
        )
        updateLanguage(newLanguage)
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography
                variant="body2"
                sx={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0px',
                    textAlign: 'left',
                    paddingRight: '60px',
                }}
            >
                Язык
            </Typography>
            <ButtonGroup>
                <Button
                    type="button"
                    size="small"
                    buttonVariant={
                        profileLanguage === 'EN' ? 'secondary' : undefined
                    }
                    cancel={profileLanguage === 'RU' || !profileLanguage}
                    disabled={profileLanguage === 'RU' || !profileLanguage}
                    onClick={toggleLanguage}
                    style={{
                        width: '32px',
                        height: '32px',
                        minWidth: '0px',
                        backgroundColor:
                            profileLanguage === 'EN' ? 'inherit' : '#FFD600',
                        color: profileTheme === 'LIGHT' ? '#000' : '#FFF',
                    }}
                >
                    <Typography
                        variant="buttonMedium"
                        sx={{
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            letterSpacing: '0px',
                            textAlign: 'center',
                        }}
                    >
                        Ru
                    </Typography>
                </Button>
                <Button
                    type="button"
                    size="small"
                    buttonVariant={
                        profileLanguage === 'RU' ? 'secondary' : undefined
                    }
                    cancel={profileLanguage === 'EN' || !profileLanguage}
                    disabled={profileLanguage === 'EN' || !profileLanguage}
                    onClick={toggleLanguage}
                    style={{
                        width: '32px',
                        height: '32px',
                        minWidth: '0px',
                        backgroundColor:
                            profileLanguage === 'EN' ? '#FFD600' : 'inherit',
                        color: profileTheme === 'LIGHT' ? '#000' : '#FFF',
                    }}
                >
                    <Typography
                        variant="buttonMedium"
                        sx={{
                            fontSize: '16px',
                            fontWeight: 400,
                            lineHeight: '24px',
                            letterSpacing: '0px',
                            textAlign: 'center',
                        }}
                    >
                        En
                    </Typography>
                </Button>
            </ButtonGroup>
        </div>
    )
}
