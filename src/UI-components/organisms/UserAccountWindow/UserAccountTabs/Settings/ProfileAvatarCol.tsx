import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { UserDto } from 'src/models/user.dto'
import { useUpdateUserAvatarMutation } from 'src/redux/api/userApi'
import { FormHandler } from 'src/UI-components/molecules'
import { UploadAccessFiles } from 'src/UI-components/molecules/UploadFiles/UploadAccessFiles/UploadAccessFiles'
import { UploadModal } from 'src/UI-components/molecules/UploadFiles/UploadModal/UploadModal'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Grid, Typography } from '@mui/material'

import { UserAvatarDeleteButton } from './UserAvatarDelete/UserAvatarDeleteButton'
import { UserAvatarButtonAvatarUploadInput } from './UserAvatarUpload/UserAvatarButtonAvatarUploadInput'
import { UserAvatarButtonUploadInput } from './UserAvatarUpload/UserAvatarButtonUploadInput'
import { uploadUserAvatarSchema } from './UserAvatarUpload/UserAvatarUpload.schema'
import { UserAvatarUploadInput } from './UserAvatarUpload/UserAvatarUploadInput'
import { UserInput } from './UserAvatarUpload/UserInput'
import { validatePhoto } from './ProfileSetting.utils'

import {
    settingsAvatarBoxStyles,
    settingsColumnStyles,
    settingsTabColumnStyles,
} from './SettingsTab.style'

interface ProfileAvatarColProps {
    user: UserDto
    setProfileSettings: (clientId: string) => void
}

export const ProfileAvatarCol = ({
    user,
    setProfileSettings,
}: ProfileAvatarColProps) => {
    const [uploadAvatar] = useUpdateUserAvatarMutation()
    const [isModalAccess, setIsModalAccess] = useState<boolean>(false)
    const clickedInputRef = useRef<HTMLInputElement | null>(null)
    const [isFileAccess, setIsFileAccess] = useState<boolean>(false)
    const resolver = yupResolver(uploadUserAvatarSchema)
    const methods = useForm({
        resolver,
        mode: 'onChange',
    })

    const { watch, reset } = methods
    const files = watch('avatar')

    const deleteAvatar = useCallback(() => {
        setProfileSettings(user.clientId)
    }, [setProfileSettings, user.clientId])

    const updateAvatar = useCallback(() => {
        if (validatePhoto(files)) {
            const formData = new FormData()
            formData.append('avatar', files[0])
            uploadAvatar(formData)
                .unwrap()
                .then(() => setProfileSettings(user.clientId))
                .then(() => reset())
                .catch(() => toast.error('Ошибка при загрузке аватара'))
        }
    }, [files, reset, setProfileSettings, uploadAvatar, user.clientId])

    const handleChangeAvatar = useCallback(() => {
        if (isFileAccess) {
            clickedInputRef?.current?.click()
        } else {
            setIsModalAccess(true)
        }
    }, [isFileAccess])

    useEffect(() => {
        updateAvatar()
    }, [files, updateAvatar])

    return (
        <Grid sx={settingsTabColumnStyles}>
            <Typography variant="buttonMedium">Фотография профиля</Typography>
            <Grid sx={settingsColumnStyles}>
                <FormHandler methods={methods}>
                    <UserInput ref={clickedInputRef} />
                    <Box sx={settingsAvatarBoxStyles}>
                        <UserAvatarButtonUploadInput
                            handleChangeAvatar={handleChangeAvatar}
                        />
                        <UserAvatarButtonAvatarUploadInput
                            user={user}
                            handleChangeAvatar={handleChangeAvatar}
                        />
                    </Box>
                    <UserAvatarUploadInput
                        handleChangeAvatar={handleChangeAvatar}
                    />
                </FormHandler>
                <UserAvatarDeleteButton
                    updateAvatar={deleteAvatar}
                    disabled={!user.profileSettings?.avatarFile}
                />
            </Grid>
            <UploadModal isShowModal={isModalAccess}>
                <UploadAccessFiles
                    handleClose={() => setIsModalAccess(false)}
                    setIsFileAccess={setIsFileAccess}
                    clickedInputRef={clickedInputRef}
                />
            </UploadModal>
        </Grid>
    )
}
