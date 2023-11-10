import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { descriptionStyles, switcherBoxStyles } from 'src/common/common.styles'
import { Button } from 'src/UI-components/atoms'
import {
    CreditTermsTable,
    depositsTable,
    depositTableDataTransform,
} from 'src/UI-components/molecules'
import { MainMenuPage } from 'src/UI-components/organisms'
import { Box, Switch, Typography } from '@mui/material'

import { ApplyForDepositPdfLink } from '../ApplyForDeposit'
import { Deposits } from '../MyDeposits'

import { buttonsBoxStyles, yellowSwitchStyles } from './MyDepositInfo.style'

interface MyDepositInfoProps {
    data: Deposits
    onSwitch: () => void
}

export const MyDepositInfo: FC<MyDepositInfoProps> = ({ data, onSwitch }) => {
    const { state } = useLocation()
    const navigate = useNavigate()

    const handleWithdrawDeposit = () => {
        navigate(
            `/user_main/deposits/my_deposits/withdraw-deposit/${state.agreementId}`,
            { state }
        )
    }

    const handleReplenishDeposit = () => {
        navigate('/user_main/payments/financepage/new', {
            state: {
                title: 'Create Bank',
                service: 'Пополнение депозита',
                accountNumber: data.accountNumber,
            },
        })
    }

    return (
        <MainMenuPage text={data.name} backButton>
            <CreditTermsTable
                keysTableDetails={depositsTable}
                valueTableDetails={data}
                dataTransform={depositTableDataTransform}
                type="deposit"
            />
            <Box sx={buttonsBoxStyles}>
                <Button
                    size="long"
                    type="button"
                    buttonVariant="primary"
                    onClick={handleReplenishDeposit}
                >
                    Пополнить депозит
                </Button>
                {data.isRevocable && (
                    <Button
                        size="long"
                        type="button"
                        buttonVariant="secondary"
                        onClick={handleWithdrawDeposit}
                    >
                        Отозвать депозит
                    </Button>
                )}
            </Box>

            <Box sx={switcherBoxStyles}>
                <Box>
                    <Typography variant="body1">
                        Продлевать автоматически
                    </Typography>
                    <Typography sx={descriptionStyles} variant="body1">
                        По истечении срока
                    </Typography>
                </Box>
                <Switch
                    sx={yellowSwitchStyles}
                    checked={data.autoRenewal}
                    onChange={onSwitch}
                />
            </Box>
            <ApplyForDepositPdfLink />
        </MainMenuPage>
    )
}
