import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cardsApi } from 'src/redux/api/cardsApi'
import { useGetOperationsHistoryQuery } from 'src/redux/api/historyApi'
import { useAppDispatch } from 'src/redux/hooks/redux'
import { Grid } from '@mui/material'

import { FeaturedItem } from '../../molecules/FeaturedItem/FeaturedItem'

import { getPopularPayments } from './featuredServices.utils'

export const FeaturedServices: FC = () => {
    const { data = [] } = useGetOperationsHistoryQuery({
        pageNumber: 0,
        pageSize: 100,
    })
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const popularPayments = getPopularPayments(data)

    const handleClick = (href: string) => {
        dispatch(cardsApi.endpoints.getDepositCards.initiate()).then(
            (response) => {
                const { data: cards } = response
                navigate(href, { state: { cards } })
            }
        )
    }
    return (
        <Grid data-testid="featured" container>
            {popularPayments.map(({ href, Icon, text }) => (
                <Grid
                    key={text}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                    item
                    md={2}
                >
                    <Link
                        onClick={() => handleClick(href)}
                        to="#"
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <FeaturedItem operation={text} icon={<Icon />} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
}
