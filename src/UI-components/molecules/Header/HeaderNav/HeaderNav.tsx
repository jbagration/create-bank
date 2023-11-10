import { FC, useEffect, useState } from 'react'
import { ATMsIcon, ContactsIcon, CurrencyIcon, Logout } from 'src/assets/svg'
import { useLazySetUserProfileSettingsQuery } from 'src/redux/api/userApi'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux'
import { logout as logoutAC } from 'src/redux/slices/auth'
import { resetCreditState } from 'src/redux/slices/creditProductsSlice'
import { HelpModal } from 'src/UI-components/molecules'
import { storage } from 'src/utils'
import { HelpOutline } from '@mui/icons-material'
import { Box, useTheme } from '@mui/material'

import type { HeaderProps } from '../Header.type'

import { HeaderNavItem } from './HeaderNavItem'
import { HeaderNavItemHelp } from './HeaderNavItemHelp'

import { headerNavContainerStyles } from './HeaderNav.style'

export const HeaderNav: FC<HeaderProps> = ({ main }) => {
    const theme = useTheme()
    const { TextSecondary, TextPrimary } = theme.palette.Text

    const user = useAppSelector((state) => state.auth.user)

    const [setUserProfileSettings] = useLazySetUserProfileSettingsQuery()
    useEffect(() => {
        if (user?.clientId) {
            setUserProfileSettings(user.clientId)
        }
    }, [setUserProfileSettings, user?.clientId])

    const avatarUrl = user?.profileSettings?.avatarFile
    const fullName = user ? `${user.firstName} ${user.lastName}` : ''

    const dispatch = useAppDispatch()
    const logout = () => {
        storage.remove('accessToken')
        storage.remove('refreshToken')
        dispatch(logoutAC({ isAutoLogout: false }))
        dispatch(resetCreditState())
    }

    const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false)
    const handleCloseHelpModal = () => setIsHelpModalOpen(false)
    const handleOpenHelpModal = () => setIsHelpModalOpen(true)

    const headerNavContainerStylesSx = headerNavContainerStyles({ user })
    const iconsColor = main ? TextSecondary : TextPrimary

    return (
        <Box sx={headerNavContainerStylesSx}>
            {!user ? (
                <>
                    <HeaderNavItem
                        to="/bank_branch"
                        text="Банкоматы и отделения"
                        main={main}
                    >
                        <ATMsIcon color={iconsColor} />
                    </HeaderNavItem>
                    <HeaderNavItem
                        to="/exchange_rate"
                        text="Курсы валют"
                        main={main}
                    >
                        <CurrencyIcon color={iconsColor} />
                    </HeaderNavItem>
                    <HeaderNavItem to="/contact" text="Контакты" main={main}>
                        <ContactsIcon color={iconsColor} />
                    </HeaderNavItem>
                </>
            ) : (
                <>
                    <HelpModal
                        isOpen={isHelpModalOpen}
                        onClose={handleCloseHelpModal}
                    />
                    <HeaderNavItemHelp
                        mainColor={iconsColor}
                        handleOpenHelpModal={handleOpenHelpModal}
                    />
                    <HeaderNavItem
                        to="../user_main/faq"
                        text="Вопросы"
                        main={main}
                    >
                        <HelpOutline
                            sx={{
                                '&.MuiSvgIcon-root': {
                                    width: 24,
                                    height: 24,
                                },
                                fill: iconsColor,
                                marginTop: 2,
                            }}
                        />
                    </HeaderNavItem>
                    <HeaderNavItem
                        to="/user_main/user_profile"
                        text={fullName}
                        src={avatarUrl}
                        main={main}
                        sx={{ paddingRight: '93px' }}
                    />
                    <HeaderNavItem
                        to="/login"
                        main={main}
                        text="Выйти"
                        onClick={logout}
                    >
                        <Logout
                            fill={iconsColor}
                            style={{ marginTop: '6px' }}
                        />
                    </HeaderNavItem>
                </>
            )}
        </Box>
    )
}
