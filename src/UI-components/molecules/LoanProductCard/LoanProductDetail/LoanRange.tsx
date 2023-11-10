import { FC } from 'react'
import { Box } from '@mui/material'

import { ClipboardComponent } from '../../ClipboardComponent/ClipboardComponent'

import { scaleLoanStyles } from './LoanProductDetail.style'

import { LoanRangeProps } from './LoanProductDetail.type'

export const LoanRange: FC<LoanRangeProps> = ({ arrLoanRange }) => {
    const scaleLoanStylesSx = scaleLoanStyles()

    return (
        <>
            {arrLoanRange.map((value, index) => {
                return (
                    <Box sx={scaleLoanStylesSx}>
                        <ClipboardComponent
                            copy={false}
                            title={
                                index === 0
                                    ? String(value.minSum)
                                    : String(value.minPeriodMonths)
                            }
                            topBorder={false}
                            leftBorder={false}
                            loanDetails
                            rightBorder={false}
                            bottomBorder={false}
                            subtitle={
                                index === 0
                                    ? 'Минимальная сумма кредита'
                                    : 'Минимальный период'
                            }
                            padding="0"
                        />
                        <Box sx={{ width: '34%' }}>
                            <ClipboardComponent
                                copy={false}
                                title={
                                    index === 0
                                        ? String(value.maxSum)
                                        : String(value.maxPeriodMonths)
                                }
                                topBorder={false}
                                leftBorder={false}
                                rightBorder={false}
                                bottomBorder={false}
                                subtitle={
                                    index === 0
                                        ? 'Максимальная сумма кредита'
                                        : 'Максимальный период'
                                }
                                loanDetails
                                padding="0"
                            />
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}
