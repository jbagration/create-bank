import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Button } from '../../../atoms'
import { CreditTermsTable } from '../../CreditTermsTable/CreditTermsTable'

import { dataTransform } from './LoanProductDetail.utils'
import { LoanRange } from './LoanRange'

import { loanProductTable } from './LoanProductDetail.const'

import { LoanProductDetailProps } from './LoanProductDetail.type'

export const LoanProductDetail: FC<LoanProductDetailProps> = ({
    credit,
    arrLoanRange,
}) => {
    const { id } = useParams() as { id: string }
    const navigate = useNavigate()

    const handleClickNavigate = () => {
        navigate(`/user_main/credits/products/apply/${id}`, {
            replace: true,
            state: credit,
        })
    }

    return (
        <Box width={526}>
            <CreditTermsTable
                head
                type="default"
                keysTableDetails={loanProductTable}
                valueTableDetails={{
                    minInterestRate: credit.minInterestRate,
                    needGuarantees: credit.needGuarantees,
                    earlyRepayment: credit.earlyRepayment,
                    needIncomeDetails: credit.needIncomeDetails,
                    autoProcessing: credit.autoProcessing,
                }}
                dataTransform={dataTransform}
                textVariantR="h5"
            />

            <LoanRange arrLoanRange={arrLoanRange} />

            <Button
                onClick={handleClickNavigate}
                size="long"
                buttonVariant="primary"
                sx={{ margin: '80px auto' }}
            >
                Оформить
            </Button>
        </Box>
    )
}
