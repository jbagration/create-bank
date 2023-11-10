import { NavLink } from 'react-router-dom'
import { captionStyles, linkStyles } from 'src/common/common.styles'
import { Typography } from '@mui/material'

import { Caption } from '../../../molecules'

export const NoCardCaption = () => {
    return (
        <Caption component sx={captionStyles}>
            <>
                На данный момент у вас нет карт. Вы можете ознакомиться с{' '}
                <NavLink to="/user_main/cards/products">
                    <Typography sx={linkStyles}>
                        карточными продуктами
                    </Typography>
                </NavLink>{' '}
                и{' '}
                <NavLink to="/user_main/cards/products">
                    <Typography sx={linkStyles}>подать заявку</Typography>
                </NavLink>{' '}
                на получение карты онлайн
            </>
        </Caption>
    )
}
