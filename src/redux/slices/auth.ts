import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserDto, UserProfileSettingsDto } from '../../models'
import { Nullable } from '../../types'

export interface AuthState {
    isAuthenticated: boolean
    user: Nullable<UserDto>
    isFetchError: boolean
    clientId: string
}

interface LogoutPayload {
    isAutoLogout: boolean
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    isFetchError: false,
    clientId: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.isAuthenticated = true
            state.clientId = action.payload
        },
        logout(state, payload: PayloadAction<LogoutPayload>) {
            state.isAuthenticated = false
            state.user = null
        },
        refresh(state) {
            state.isAuthenticated = true
        },
        setUser(state, action: PayloadAction<UserDto>) {
            state.user = action.payload
        },
        setFetchError(state, action: PayloadAction<boolean>) {
            state.isFetchError = action.payload
        },
        setUserAvatar(
            state,
            action: PayloadAction<
                Pick<UserProfileSettingsDto, 'avatarFile' | 'fileFormat'>
            >
        ) {
            if (state.user && state.user.profileSettings) {
                state.user.profileSettings.avatarFile =
                    action.payload.avatarFile
                state.user.profileSettings.fileFormat =
                    action.payload.fileFormat
            }
        },
        setUserProfileTheme(
            state,
            action: PayloadAction<Pick<UserProfileSettingsDto, 'profileTheme'>>
        ) {
            if (state.user && state.user.profileSettings) {
                state.user.profileSettings.profileTheme =
                    action.payload.profileTheme
            }
        },
        setUserProfileLanguage(
            state,
            action: PayloadAction<
                Pick<UserProfileSettingsDto, 'profileLanguage'>
            >
        ) {
            if (state.user && state.user.profileSettings) {
                state.user.profileSettings.profileLanguage =
                    action.payload.profileLanguage
            }
        },
    },
})

export const { reducer: authReducer } = authSlice
export const {
    login,
    logout,
    refresh,
    setUser,
    setFetchError,
    setUserAvatar,
    setUserProfileTheme,
    setUserProfileLanguage,
} = authSlice.actions
