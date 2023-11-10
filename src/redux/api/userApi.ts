import { UserProfileSettingsDto } from 'src/models'

import {
    setUserAvatar,
    setUserProfileLanguage,
    setUserProfileTheme,
} from '../slices/auth'

import { api } from './api'

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        setUserProfileSettings: builder.query<UserProfileSettingsDto, string>({
            query: (clientId) =>
                `user/settings/profile-setting?clientId=${clientId}`,
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const { data: user } = await queryFulfilled

                    if (!user.avatarFile) {
                        dispatch(
                            setUserAvatar({
                                avatarFile: '',
                                fileFormat: 'image/jpeg',
                            })
                        )
                    } else {
                        const arrayBuffer = Uint8Array.from(
                            window.atob(user.avatarFile),
                            (c) => c.charCodeAt(0)
                        )

                        const file = new File([arrayBuffer], 'avatar', {
                            type: user.fileFormat,
                        })

                        const objectUrl = URL.createObjectURL(file)
                        dispatch(
                            setUserAvatar({
                                avatarFile: objectUrl,
                                fileFormat: user.fileFormat,
                            })
                        )
                    }

                    dispatch(
                        setUserProfileTheme({
                            profileTheme: user.profileTheme || 'LIGHT',
                        })
                    )
                    dispatch(
                        setUserProfileLanguage({
                            profileLanguage: user.profileLanguage || 'RU',
                        })
                    )
                } catch ({ error }) {}
            },
        }),
        updatePhoneNumber: builder.mutation<void, { mobilePhone: string }>({
            query: (body) => ({
                url: `user/settings/phone`,
                method: 'PATCH',
                body,
            }),
        }),
        updateUserAvatar: builder.mutation<void, FormData>({
            query: (body) => ({
                url: 'user/settings/profile-setting/avatar',
                method: 'POST',
                body,
            }),
        }),
        deleteUserAvatar: builder.mutation<void, void>({
            query: () => ({
                url: `user/settings/profile-setting/avatar`,
                method: 'DELETE',
            }),
        }),
        updateProfileTheme: builder.mutation<void, string>({
            query: (profileTheme) => ({
                url: `user/settings/profile-setting/profile-theme`,
                method: 'PATCH',
                body: { profileTheme },
            }),
        }),
        updateProfileLanguage: builder.mutation<void, string>({
            query: (profileLanguage) => ({
                url: `user/settings/profile-setting/profile-language`,
                method: 'PATCH',
                body: { profileLanguage },
            }),
        }),
    }),
})

export const {
    useLazySetUserProfileSettingsQuery,
    useUpdatePhoneNumberMutation,
    useUpdateUserAvatarMutation,
    useDeleteUserAvatarMutation,
    useUpdateProfileThemeMutation,
    useUpdateProfileLanguageMutation,
} = userApi
