import { FC, memo, useMemo } from 'react'
import { Preloader } from 'src/assets/svg'
import { useGetBankBranchesQuery } from 'src/redux/api/infoServicesApi'
import { BankBranchesState } from 'src/redux/slices/bankBranchSlice'

import { PickPersonallyTab } from './PickPersonallyTab/PickPersonallyTab'

import { TabProps } from '../CardProductApply.type'

export const PickPersonallyTabContainer: FC<TabProps> = memo(
    ({ showSuccessModal, productId, createDebitCard, accountNumber }) => {
        const { data: bankList, isLoading } = useGetBankBranchesQuery()

        const filteredBankList = useMemo(
            () =>
                bankList?.filter(
                    (branch: BankBranchesState) =>
                        branch.bankBranchType === 'LOCAL_BRANCH'
                ),
            [bankList]
        )

        if (isLoading || !filteredBankList) {
            return <Preloader />
        }

        return (
            <PickPersonallyTab
                bankList={filteredBankList}
                showSuccessModal={showSuccessModal}
                productId={productId}
                createDebitCard={createDebitCard}
                accountNumber={accountNumber}
            />
        )
    }
)
