import { UserDto } from 'src/models'
import { Avatar, Box } from '@mui/material'

import { buttonAvatarStyle } from '../SettingsTab.style'

interface UserAvatarButtonAvatarUploadProps {
    user: UserDto
    handleChangeAvatar: () => void
}

export const UserAvatarButtonAvatarUploadInput = ({
    user,
    handleChangeAvatar,
}: UserAvatarButtonAvatarUploadProps) => {
    return (
        <Box>
            <Box display="flex" flexDirection="column" marginBottom="-15px">
                <Avatar
                    onClick={handleChangeAvatar}
                    src={user.profileSettings?.avatarFile}
                    alt="avatar"
                    sx={buttonAvatarStyle}
                />
            </Box>
        </Box>
    )
}
