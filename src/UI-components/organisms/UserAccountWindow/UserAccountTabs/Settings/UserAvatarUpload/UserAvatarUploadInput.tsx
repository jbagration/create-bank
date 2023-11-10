import { useFormContext } from 'react-hook-form'
import { Button } from 'src/UI-components/atoms'
import { Box, Typography } from '@mui/material'

import { ReactComponent as ChangePic } from 'src/assets/svg/UserAvatar/changePic.svg'

import { errorTextStylesPhoto, settingsBtnStyles } from '../SettingsTab.style'

interface UserAvatarUploadInputProps {
    handleChangeAvatar: () => void
}

export const UserAvatarUploadInput = ({
    handleChangeAvatar,
}: UserAvatarUploadInputProps) => {
    const {
        formState: { errors },
    } = useFormContext()
    return (
        <Box>
            <Typography sx={errorTextStylesPhoto} position="relative">
                {errors.avatar?.message}
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
                <Button
                    onClick={handleChangeAvatar}
                    size="medium"
                    style={settingsBtnStyles}
                    cancel
                    startIcon={<ChangePic />}
                >
                    <span style={{ fontWeight: 500 }}>Сменить фото</span>
                </Button>
            </Box>
        </Box>
    )
}
