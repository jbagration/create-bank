import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { myLinkSx } from 'src/common/common.styles'
import { Box, Grid, Typography } from '@mui/material'

import { Button } from '../../atoms'

import { buttonsBoxStyles } from './LoanProduct.style'

import { LoanProductCardProps } from './LoanProduct.type'

export const LoanProductDescription: FC<LoanProductCardProps> = ({
    Svg,
    details,
    creditId,
    apply = true,
    flex = 'false',
    data,
}) => {
    const navigate = useNavigate()
    const oneLoan = data.filter(
        (element: { id: number | undefined }) => creditId === element.id
    )

    const buttonsBoxStylesSx = buttonsBoxStyles({ flex })

    const handleOrderClick = () => {
        navigate(`/user_main/credits/products/apply/${creditId}`, {
            state: oneLoan[0],
        })
    }

    const handleKnowMoreClick = () => {
        navigate(`${creditId}`, { state: oneLoan[0] })
    }

    return (
        <Grid container justifyContent="space-between" height="320px">
            <Box sx={Svg && { width: '52%', p: '32px', pr: '0' }}>
                <Typography variant="subtitle3" color="Text.TextPrimary">
                    {details}
                </Typography>

                <Box sx={buttonsBoxStylesSx}>
                    <Typography
                        data-testid="more"
                        variant="textLink3"
                        sx={myLinkSx}
                        onClick={handleKnowMoreClick}
                    >
                        Узнать больше
                    </Typography>

                    {apply && (
                        <Button
                            size="medium"
                            buttonVariant="primary"
                            onClick={handleOrderClick}
                        >
                            Оформить
                        </Button>
                    )}
                </Box>
            </Box>

            {Svg && <Svg />}
        </Grid>
    )
}
