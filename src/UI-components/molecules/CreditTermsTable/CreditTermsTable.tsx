import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Grid } from '@mui/material'

import { DepositTable } from './DepositTable/DepositTable'
import type { CreditTermsTableProps } from './CrediTermsTable.types'
import { HeadCreditTable, LeftFields, RightFields } from './CreditTableChunks'

export const CreditTermsTable: FC<CreditTermsTableProps> = ({
    keysTableDetails,
    valueTableDetails,
    head,
    dataTransform,
    type,
    textVariantL,
    textVariantR,
}) => {
    const data = dataTransform && dataTransform(valueTableDetails)

    return type === 'deposit' && data ? (
        <DepositTable
            keysTableDetails={keysTableDetails}
            amount={data[0]}
            validity={data[1]}
            data={data}
        />
    ) : (
        <Grid container marginTop="40px">
            {head && <HeadCreditTable />}
            {data?.map((value: string, index: number) => {
                return (
                    <React.Fragment key={uuidv4()}>
                        <LeftFields
                            head={head}
                            type={type}
                            title={value}
                            index={index}
                            keysTableDetails={keysTableDetails}
                            textVariantL={textVariantL}
                        />
                        <RightFields
                            head={head}
                            type={type}
                            index={index}
                            title={value}
                            keysTableDetails={keysTableDetails}
                            textVariantR={textVariantR}
                        />
                    </React.Fragment>
                )
            })}
        </Grid>
    )
}
