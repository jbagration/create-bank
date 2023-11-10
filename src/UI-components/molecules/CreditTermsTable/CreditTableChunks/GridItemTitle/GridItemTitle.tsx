import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography } from '@mui/material'

import { Link } from '../../../../atoms'

import { GridItemTitleStyles } from './GridItemTitle.style'

import { GridItemTitleProps } from './GridItemTitle.type'

export const GridItemTitle: FC<GridItemTitleProps> = ({
    textVariantR,
    textVariantL = 'body1',
    textBold = false,
    title,
    getLinkByTitle,
    notImplemented = false,
    handleStubModalOpen,
}) => {
    const GridItemTitleStylesSx = GridItemTitleStyles({ textBold })

    const { state } = useLocation()

    const isTitleDepositLink = getLinkByTitle && title in getLinkByTitle

    let linkTo: string = ''
    if (isTitleDepositLink) {
        linkTo = getLinkByTitle[title](state)
    }

    if (notImplemented) {
        return (
            <Typography
                sx={{
                    ...GridItemTitleStylesSx,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                }}
                variant={textVariantR || textVariantL}
                onClick={handleStubModalOpen}
            >
                {title}
            </Typography>
        )
    }

    if (isTitleDepositLink) {
        return (
            <Link
                to={linkTo}
                variant={textVariantR || textVariantL}
                target="_self"
                state={state}
                sx={{ textDecoration: 'underline' }}
            >
                {title}
            </Link>
        )
    }
    return (
        <Typography
            sx={GridItemTitleStylesSx}
            variant={textVariantR || textVariantL}
        >
            {title}
        </Typography>
    )
}
