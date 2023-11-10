import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { BoxProps, Typography } from '@mui/material'
import { Box } from '@mui/system'

import AppleLinkMini from '../../../assets/img/StoreLink/appstoreMini.svg'
import GoogleLinkMini from '../../../assets/img/StoreLink/googleplayMini.svg'

import AppleLinkBig from '../../../assets/img/StoreLink/appstoreBig.png'
import GoogleLinkBig from '../../../assets/img/StoreLink/googleplayBig.png'
import { StoreLink } from '../../atoms/StoreLink'

import {
    storeLinkBoxStyles,
    storeLinkImagesBoxStyles,
    storeLinkStyles,
    storeTitleStyles,
} from './StoreLinkBox.style'

import { StoreLinkBoxProps } from './StoreLinkBox.type'

export const StoreLinkBox: FC<BoxProps & StoreLinkBoxProps> = ({
    isMinified,
    isMain,
    title,
    ...props
}) => {
    const navigate = useNavigate()

    const storeTitleStylesSx = storeTitleStyles({ isMinified, ...props })
    const storeLinkBoxSx = storeLinkBoxStyles({ isMinified, isMain, ...props })
    const storeLinkStyledSx = storeLinkStyles({ isMinified, ...props })
    const storeLinkImagesBoxStylesSx = storeLinkImagesBoxStyles({
        isMinified,
        ...props,
    })

    const handleClickAppStore = () => {
        navigate('/inWork')
    }

    return (
        <Box sx={storeLinkBoxSx}>
            {title && (
                <Typography variant="body1" sx={storeTitleStylesSx}>
                    {title}
                </Typography>
            )}
            <Box sx={storeLinkImagesBoxStylesSx}>
                <StoreLink
                    onClick={handleClickAppStore}
                    isMinified={isMinified}
                    // href="https://www.apple.com/ru/app-store/"
                    sx={{
                        backgroundImage: isMinified
                            ? `url(${AppleLinkMini})`
                            : `url(${AppleLinkBig})`,
                        ...storeLinkStyledSx,
                        cursor: 'pointer',
                    }}
                />
                <StoreLink
                    isMinified={isMinified}
                    href="https://play.google.com/store"
                    sx={{
                        backgroundImage: isMinified
                            ? `url(${GoogleLinkMini})`
                            : `url(${GoogleLinkBig})`,
                        ...storeLinkStyledSx,
                    }}
                />
            </Box>
        </Box>
    )
}
