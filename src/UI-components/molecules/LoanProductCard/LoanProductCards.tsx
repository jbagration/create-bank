import { FC } from 'react'
import { Grid } from '@mui/material'

import { Preloader } from '../../../assets/svg'
import { creditSvg } from '../../../assets/svg/LoanProductPageSvg'
import { useGetCreditProductsQuery } from '../../../redux/api/creditProductApi'
import { WrapperWithTitle } from '../Wrappers/WrapperWithTitle/WrapperWithTitle'

import { LoanProductDescription } from './LoanProductDescription'

export const LoanProductCards: FC = () => {
    const { data, isLoading } = useGetCreditProductsQuery()

    if (isLoading) {
        return <Preloader />
    }

    return (
        <Grid spacing={6} container>
            {data?.map((credit, index) => {
                const currentSvg = () =>
                    index === 1
                        ? creditSvg[0]
                        : index === 3
                        ? creditSvg[1]
                        : (index + 1) % 3 === 0
                        ? creditSvg[2]
                        : null

                return (
                    <Grid
                        item
                        xs={(index + 1) % 3 === 0 ? 12 : 6}
                        key={credit.id}
                    >
                        <WrapperWithTitle
                            title={credit.name}
                            loanCard
                            subtitle={`${credit.minInterestRate}`}
                        >
                            <LoanProductDescription
                                details={credit.details}
                                data={data}
                                creditId={credit.id}
                                Svg={currentSvg}
                            />
                        </WrapperWithTitle>
                    </Grid>
                )
            })}
        </Grid>
    )
}
