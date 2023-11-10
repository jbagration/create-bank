import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import {
    maxInterestRateNonRevocable,
    maxInterestRateRevocable,
    minInterestRateNonRevocable,
    minInterestRateRevocable,
    nonRevocableDepositDurationByRate,
    revocableDepositDurationByRate,
} from 'src/common'
import { RangeInfoBlock } from 'src/UI-components/molecules/RangeInfoBlock'
import { formatNumber, pluralMonths } from 'src/utils'

export const DepositProductRangeInfo: FC = () => {
    const { state } = useLocation()
    const { isRevocable, currencyCode, amountMin, amountMax } = state

    return (
        <>
            <RangeInfoBlock
                minValue={`${formatNumber(amountMin, {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                })} ${currencyCode}`}
                maxValue={`${formatNumber(amountMax, {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                })} ${currencyCode}`}
                minDescription="Минимальная сумма"
                maxDescription="Максимальная сумма"
            />
            <RangeInfoBlock
                minValue={
                    isRevocable
                        ? minInterestRateRevocable
                        : minInterestRateNonRevocable
                }
                maxValue={
                    isRevocable
                        ? maxInterestRateRevocable
                        : maxInterestRateNonRevocable
                }
                minDescription="Минимальная ставка"
                maxDescription="Максимальная ставка"
            />
            <RangeInfoBlock
                minValue={
                    isRevocable
                        ? pluralMonths(
                              revocableDepositDurationByRate[
                                  minInterestRateRevocable
                              ]
                          )
                        : pluralMonths(
                              nonRevocableDepositDurationByRate[
                                  minInterestRateNonRevocable
                              ]
                          )
                }
                maxValue={
                    isRevocable
                        ? pluralMonths(
                              revocableDepositDurationByRate[
                                  maxInterestRateRevocable
                              ]
                          )
                        : pluralMonths(
                              nonRevocableDepositDurationByRate[
                                  maxInterestRateNonRevocable
                              ]
                          )
                }
                minDescription="Минимальный срок "
                maxDescription="Максимальный срок"
            />
        </>
    )
}
