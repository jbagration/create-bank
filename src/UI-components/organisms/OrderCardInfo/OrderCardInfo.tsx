import { FC, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Box, Link, Typography } from '@mui/material'

import { LocationParams } from '../../../types/hooksTypes'
import { Button, Caption } from '../../atoms'
import { Checkbox } from '../../atoms/CustomCheckbox'
import { ItemCard } from '../../molecules'
import { CreditTermsTable } from '../../molecules/CreditTermsTable/CreditTermsTable'
import { MainMenuPage } from '../MainMenuPageComponent'

import {
    btn,
    captionText,
    CardProductTable,
    dataTransform,
    linkText,
    textAgree,
} from './OrderCardInfo.const'

import {
    captionContainerStyles,
    tabCheckboxStyles,
} from './OrderCardInfo.style'

import { ModifiedProducts } from '../CardProducts/CardProducts.type'

export const OrderCardInfo: FC = () => {
    const navigate = useNavigate()
    const { cardId } = useParams() as { cardId: string }

    const { state: data } = useLocation() as LocationParams<ModifiedProducts[]>

    const [card] = data.filter((element) => cardId === `${element.id}`)

    const [isChecked, setChecked] = useState(false)

    return (
        <MainMenuPage text={`${card.cardName}`} backButton>
            <Box marginBottom="70px">
                <ItemCard
                    paymentSystem={card.paymentSystem}
                    cardName={card.cardName}
                    currencyCode=""
                />
            </Box>

            <CreditTermsTable
                keysTableDetails={CardProductTable}
                valueTableDetails={card}
                dataTransform={dataTransform}
                type="default"
                textVariantR="strong1"
            />
            <Caption component>
                <Box sx={captionContainerStyles}>
                    <Checkbox
                        sx={tabCheckboxStyles}
                        checked={isChecked}
                        onChange={() => setChecked(!isChecked)}
                    />
                    <Typography variant="body1">
                        {textAgree}
                        <Link>{linkText}</Link>
                        {captionText}
                    </Typography>
                </Box>
            </Caption>
            <Button
                size="long"
                buttonVariant="primary"
                disabled={!isChecked}
                onClick={() => {
                    navigate(`account`)
                }}
            >
                {btn}
            </Button>
        </MainMenuPage>
    )
}
