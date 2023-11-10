import { FC, useState } from 'react'
import { Grid } from '@mui/material'

import { ClipboardComponent } from '../../ClipboardComponent'
import { StubModal } from '../../StubModal'
import { GridItem } from '../CreditTableChunks/GridItem'

import type { DepositTableProps } from './DepositTable.type'

export const DepositTable: FC<DepositTableProps> = ({
    keysTableDetails,
    amount,
    validity,
    data,
}) => {
    const [isStubModalOpen, setIsStubModalOpen] = useState<boolean>(false)
    const handleStubModalClose = () => {
        setIsStubModalOpen(false)
    }
    const handleStubModalOpen = () => {
        setIsStubModalOpen(true)
    }

    const newLeftFields = keysTableDetails.slice(2)
    const newData = data.slice(2)

    return (
        <Grid container md={12}>
            <Grid item md={5}>
                <ClipboardComponent
                    loanDetails
                    title={amount}
                    subtitle="Cумма депозита"
                    leftTop="6"
                    rightBorder={false}
                    bottomBorder={false}
                />
            </Grid>
            <Grid item md={7}>
                <ClipboardComponent
                    loanDetails
                    title={validity}
                    subtitle="Срок действия"
                    rightTop="6"
                    bottomBorder={false}
                />
            </Grid>
            {newData.map((value: any, index: number) => {
                return (
                    <>
                        <GridItem
                            size={5}
                            key={keysTableDetails[index]}
                            title={newLeftFields[index]}
                            rightBorder={false}
                            leftBottom={
                                index === newLeftFields.length - 1 ? '6' : '0'
                            }
                            bottomBorder={index === newLeftFields.length - 1}
                        />

                        <GridItem
                            textBold
                            textVariantR="strong1"
                            size={7}
                            key={newLeftFields[index]}
                            title={value}
                            rightBottom={
                                index === newLeftFields.length - 1 ? '6' : '0'
                            }
                            bottomBorder={index === newLeftFields.length - 1}
                            notImplemented={value === 'Пополнить'}
                            handleStubModalOpen={handleStubModalOpen}
                        />
                    </>
                )
            })}
            <StubModal
                isOpen={isStubModalOpen}
                message="Функционал временно недоступен"
                onConfirmButtonClick={handleStubModalClose}
            />
        </Grid>
    )
}
