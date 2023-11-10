import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { menuOptionTitleStyles } from 'src/common/common.styles'
import { useGetDepositCardsQuery } from 'src/redux/api/cardsApi'
import { paymentTypeCardBoxStyles } from 'src/UI-components/molecules'
import { MainMenuPage } from 'src/UI-components/organisms'
import { Box, Link, Typography, useTheme } from '@mui/material'

import { transfersOptions } from './TransfersPage.const'

import { iconWrapperStyle } from './TransfersPage.style'

export const TransfersPageContainer = () => {
    const { data: depositCards } = useGetDepositCardsQuery()
    const cards = (depositCards ?? []).filter((card) => !card.expired)

    const theme = useTheme()
    const { BackgoundDark } = theme.palette.BackGray

    const [isStubModalOpen, setIsStubModalOpen] = useState<boolean>(false)
    const handleStubModalClose = () => {
        setIsStubModalOpen(false)
    }
    const handleStubModalOpen = () => {
        setIsStubModalOpen(true)
    }

    return (
        <MainMenuPage text="Переводы" backButton>
            <Box display="flex" flexWrap="wrap">
                {transfersOptions.map((item, id) => {
                    const { icon: Icon, path, text } = item

                    const onClickHandler =
                        id === 1 || id === 0 ? undefined : handleStubModalOpen

                    return (
                        <Link
                            key={path}
                            sx={{ textDecoration: 'none' }}
                            to={path}
                            component={RouterLink}
                            state={{ cards }}
                            onClick={onClickHandler}
                        >
                            <Box sx={paymentTypeCardBoxStyles}>
                                <Box sx={iconWrapperStyle}>
                                    {path === 'phone' ? (
                                        <Icon stroke={BackgoundDark} />
                                    ) : (
                                        <Icon fill={BackgoundDark} />
                                    )}
                                </Box>
                                <Typography
                                    variant="subtitle3"
                                    sx={menuOptionTitleStyles}
                                >
                                    {text}
                                </Typography>
                            </Box>
                        </Link>
                    )
                })}
            </Box>
        </MainMenuPage>
    )
}
