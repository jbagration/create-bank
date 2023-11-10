import { FC } from 'react'
import { menuOptionTitleStyles } from 'src/common/common.styles'
import {
    PaymentTypeCard,
    paymentTypeCardBoxStyles,
    PaymentTypeCardProps,
} from 'src/UI-components/molecules'
import { Box, Grid, Typography } from '@mui/material'

import { paymentTypes } from './PaymentTypesContainer.const'

interface PaymentTypesContainerProps {
    handleModalOpen?: () => void
}

const PaymentTypeCardStub: FC<
    PaymentTypesContainerProps & PaymentTypeCardProps
> = ({ handleModalOpen, icon, title }) => (
    <Box sx={paymentTypeCardBoxStyles} onClick={handleModalOpen}>
        <img src={icon} alt="icon" />
        <Typography variant="subtitle3" sx={menuOptionTitleStyles}>
            {title}
        </Typography>
    </Box>
)

export const PaymentTypesContainer: FC<PaymentTypesContainerProps> = ({
    handleModalOpen,
}) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
        >
            {paymentTypes?.map((item) => {
                if (item.path === '/')
                    return (
                        <PaymentTypeCardStub
                            key={item.id}
                            handleModalOpen={handleModalOpen}
                            {...item}
                        />
                    )

                return <PaymentTypeCard key={item.id} {...item} />
            })}
        </Grid>
    )
}
