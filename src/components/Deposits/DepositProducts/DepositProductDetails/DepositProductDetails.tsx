import { FC } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button } from 'src/UI-components/atoms'
import { CreditTermsTable } from 'src/UI-components/molecules/CreditTermsTable'
import { MainMenuPage } from 'src/UI-components/organisms'

import { DepositProductRangeInfo } from './DepositProductRangeInfo'

import {
    btn,
    dataTransform,
    leftFieldsNonRevocable,
    leftFieldsRevocable,
} from './DepositProductDetails.const'

export const DepositProductDetails: FC = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    const { state } = useLocation()

    return (
        <MainMenuPage text={name ?? ''} backButton>
            <DepositProductRangeInfo />

            <CreditTermsTable
                keysTableDetails={
                    state.isRevocable
                        ? leftFieldsRevocable
                        : leftFieldsNonRevocable
                }
                valueTableDetails={state}
                dataTransform={dataTransform}
                type="default"
                textVariantR="strong1"
            />
            <Button
                onClick={() => {
                    navigate(`/user_main/deposits/products/apply/${name}`, {
                        state,
                    })
                }}
                sx={{ marginTop: '64px' }}
                size="long"
                buttonVariant="primary"
            >
                {btn}
            </Button>
        </MainMenuPage>
    )
}
