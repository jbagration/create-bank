import { NavLink } from 'react-router-dom'
import { Preloader } from 'src/assets/svg'
import { captionStyles, linkStyles } from 'src/common/common.styles'
import { useGetDepositsQuery } from 'src/redux/api/depositsApi'
import { Caption } from 'src/UI-components/atoms'
import Typography from '@mui/material/Typography'

import { MyDeposits } from './MyDeposits'

export const MyDepositsContainer = () => {
    const { data, isSuccess, isLoading } = useGetDepositsQuery()

    if (isLoading) {
        return <Preloader width="50%" height="50%" />
    }

    if (isSuccess && data.length > 0) {
        return <MyDeposits data={data} />
    }

    return (
        <Caption component sx={captionStyles}>
            <>
                <Typography component="span">
                    {`На данный момент у вас пока нет депозитов. Вы можете
                    ознакомиться с `}
                </Typography>
                <NavLink to="/user_main/deposits/products">
                    <Typography sx={linkStyles}>
                        Депозитными продуктами
                    </Typography>
                </NavLink>
                <Typography component="span">{` и `}</Typography>
                <NavLink to="/user_main/deposits/products">
                    <Typography sx={linkStyles}>Подать заявку</Typography>
                </NavLink>
                <Typography component="span">
                    {` на оформление депозита онлайн`}
                </Typography>
            </>
        </Caption>
    )
}
