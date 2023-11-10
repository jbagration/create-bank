import { FC } from 'react'
import { PaymentTypeCard } from 'src/UI-components/molecules/PaymentTypeCard'
import { Box } from '@mui/material'

import { MainMenuPage } from '../MainMenuPageComponent'

import { FavoritesPagesProps } from './FavoritesPayments.type'

export const FavoritesPaymentsTemplatePage: FC<FavoritesPagesProps> = ({
    title,
    listItems,
}) => {
    return (
        <Box sx={{ marginLeft: '50px', marginTop: '20px' }}>
            <MainMenuPage text={title} backButton>
                <Box display="flex" flexWrap="wrap">
                    {listItems.map((item) => (
                        <PaymentTypeCard
                            key={item.text}
                            icon={item.icon}
                            title={item.text}
                            path={item.path}
                            state={item.state}
                        />
                    ))}
                </Box>
            </MainMenuPage>
        </Box>
    )
}
