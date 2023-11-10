import { useCallback } from 'react'
import { useDeleteUserAvatarMutation } from 'src/redux/api/userApi'
import { Button } from 'src/UI-components/atoms'

import { ReactComponent as DeletePic } from 'src/assets/svg/UserAvatar/deletePic.svg'

import { settingsBtnDeleteStyles } from '../SettingsTab.style'

interface UserAvatarDeleteProps {
    updateAvatar: () => void
    disabled: boolean
}

export const UserAvatarDeleteButton = ({
    updateAvatar,
    disabled,
}: UserAvatarDeleteProps) => {
    const [deleteUserAvatar] = useDeleteUserAvatarMutation()
    const handleDeleteAvatar = useCallback(() => {
        deleteUserAvatar().unwrap().then(updateAvatar)
    }, [deleteUserAvatar, updateAvatar])

    return (
        <Button
            onClick={handleDeleteAvatar}
            size="medium"
            style={settingsBtnDeleteStyles}
            cancel
            startIcon={<DeletePic />}
            disabled={disabled}
        >
            <span style={{ fontWeight: 400 }}>Удалить фото</span>
        </Button>
    )
}
