import {
    cardFive,
    cardFour,
    cardOne,
    cardSix,
    cardThree,
    cardTwo,
} from 'src/assets'
import type { SxProps, Theme } from '@mui/material'

import type { ItemCardStylesProps } from './ItemCard.type'

import { subtitleMini } from './ItemCard.const'

export const itemCardStyles: (props: ItemCardStylesProps) => SxProps<Theme> =
    ({ cardName, mini, expired, cardStatus }) =>
    (theme) => {
        const cardNonActive = expired || cardStatus !== 'ACTIVE'
        return {
            ...(cardName?.match(/visa/i) && { background: `url(${cardOne})` }),
            ...(cardName?.match(/mir/i) && { background: `url(${cardTwo})` }),
            ...(cardName?.match(/universe/i) && {
                background: `url(${cardThree})`,
            }),
            ...(cardName?.match(/electron/i) && {
                background: `url(${cardFour})`,
            }),
            ...(cardName?.match(/рефинансирование/i) && {
                background: `url(${cardFive})`,
            }),
            ...(cardName?.match(/кредитная/i) && {
                background: `url(${cardSix})`,
            }),
            position: 'relative',
            padding: '15px 24px',
            width: '328px',
            minWidth: '328px',
            height: '210px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '12px',
            color: theme.palette.Text.TextSecondary,
            backgroundSize: 'cover',
            backgroundPositionX: 'right',
            filter: `drop-shadow(0px 16px 24px rgba(158, 158, 158, 0.14))
                    drop-shadow(0px 6px 30px rgba(158, 158, 158, 0.12))
                    drop-shadow(0px 8px 10px rgba(158, 158, 158, 0.2))
                    ${cardNonActive ? 'grayscale(1) blur(2px)' : ''}
            `,
            ...(mini && {
                padding: '3px 6px',
                width: '82px',
                minWidth: '82px',
                height: '50px',
                borderRadius: '3px',
                ...subtitleMini,
            }),
        }
    }

export const itemCardBoxStyles: (props: boolean) => SxProps<Theme> =
    (mini) => () => {
        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            '& .MuiIconButton-root': {
                width: '40px',
                p: 0,
            },
            ...(mini && {
                marginBottom: '3px',
                '& .MuiIconButton-root': {
                    width: '10px',
                    height: '10px',
                    p: 0,
                },
            }),
        }
    }
