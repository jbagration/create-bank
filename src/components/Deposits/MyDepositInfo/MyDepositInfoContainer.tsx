import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Preloader } from 'src/assets/svg'
import {
    useGetDepositItemQuery,
    useUpdateAutoRenewalMutation,
} from 'src/redux/api/depositsApi'
import { LocationParams } from 'src/types/hooksTypes'
import { Button } from 'src/UI-components/atoms'
import Box from '@mui/material/Box'

import { MyDepositInfo } from './MyDepositInfo'
import { MyDepositInfoModal } from './MyDepositInfoModal'

interface MyDepositInfoState {
    agreementId: string
}

export const MyDepositInfoContainer = () => {
    const { state } = useLocation() as LocationParams<MyDepositInfoState>
    const { data, isSuccess } = useGetDepositItemQuery({
        agreementId: state.agreementId,
    })
    const [updateAutoRenewal] = useUpdateAutoRenewalMutation()
    const [autoRenewalResult, setAutoRenewalResult] = useState<boolean | null>(
        null
    )
    const [modal, setModal] = useState<'autoRenewalSwitch' | 'success' | null>(
        null
    )

    const handleModalClose = () => {
        setModal(null)
    }

    const handleAutoRenewalSwitch = () => {
        handleModalClose()

        if (data) {
            const newAutoRenewalStatus = !data.autoRenewal

            updateAutoRenewal({
                autoRenewal: newAutoRenewalStatus,
                agreementId: state.agreementId,
            })
                .unwrap()
                .then(() => {
                    setAutoRenewalResult(newAutoRenewalStatus)
                    setModal('success')
                })
        }
    }

    if (isSuccess && data) {
        return (
            <>
                <MyDepositInfo
                    data={data}
                    onSwitch={() => setModal('autoRenewalSwitch')}
                />

                <MyDepositInfoModal
                    type="attention"
                    isOpen={modal === 'autoRenewalSwitch'}
                    message={`Вы действительно хотите ${
                        data.autoRenewal ? 'отключить' : 'активировать'
                    } автоматическое продление депозита?`}
                >
                    <Box display="flex" gap="24px">
                        <Button
                            type="button"
                            size="medium"
                            cancel
                            onClick={handleAutoRenewalSwitch}
                            testId="renewal-switch-button"
                        >
                            {data.autoRenewal ? 'Отключить' : 'Активировать'}
                        </Button>
                        <Button
                            type="button"
                            size="medium"
                            cancel
                            onClick={handleModalClose}
                        >
                            Отмена
                        </Button>
                    </Box>
                </MyDepositInfoModal>
                <MyDepositInfoModal
                    type="success"
                    isOpen={modal === 'success'}
                    message={`Автоматическое продление депозита успешно ${
                        autoRenewalResult ? 'активировано' : 'отключено'
                    }`}
                >
                    <Button
                        type="button"
                        size="medium"
                        cancel
                        onClick={handleModalClose}
                    >
                        Ок
                    </Button>
                </MyDepositInfoModal>
            </>
        )
    }

    return <Preloader />
}
