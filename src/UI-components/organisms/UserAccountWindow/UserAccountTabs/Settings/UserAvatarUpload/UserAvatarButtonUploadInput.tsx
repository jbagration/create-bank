import { Box, IconButton } from '@mui/material'

import { ReactComponent as IconUpload } from 'src/assets/svg/UserAvatar/iconUpload.svg'

import { settingsAvatarDeleteBtnStyles } from '../SettingsTab.style'

interface UserAvatarButtonUploadProps {
    handleChangeAvatar: () => void
}

export const UserAvatarButtonUploadInput = ({
    handleChangeAvatar,
}: UserAvatarButtonUploadProps) => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: '-15px',
                }}
            >
                <IconButton
                    size="small"
                    aria-label="upload"
                    color="inherit"
                    className="delete-button"
                    sx={settingsAvatarDeleteBtnStyles}
                    onClick={handleChangeAvatar}
                >
                    <IconUpload fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    )
}
