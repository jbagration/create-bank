import { ChangeEvent, FC, memo, useCallback, useState } from 'react'
import { BankBranchesState } from 'src/redux/slices/bankBranchSlice'
import { StyledContentContainerSmall } from 'src/UI-components/molecules'
import { Box, IconButton, InputAdornment } from '@mui/material'

import { CloseBtn, SearchIcon } from '../../../../../../assets/svg'
import { Button } from '../../../../../atoms'
import { PickPersonallyTabItem } from '../PickPersonallyTabItem/PickPersonallyTabItem'

import {
    bankListBoxStyles,
    closeButtonStyles,
} from './PickPersonallyTab.styles'
import type { PickPersonallyTabProps } from './PickPersonallyTab.type'

import { StyledSearch } from '../../../../../molecules/Search/InputSearch.style'

export const PickPersonallyTab: FC<PickPersonallyTabProps> = memo(
    ({
        bankList,
        showSuccessModal,
        accountNumber,
        productId,
        createDebitCard,
    }) => {
        const [value, setValue] = useState('')

        const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
            setValue(event.target.value)
        }

        const [selectedItem, setSelectedItem] = useState<string>('')

        const handleSubmit = useCallback(() => {
            if (productId) {
                createDebitCard({
                    productId,
                    shippingMethod: 'TAKEPERSONALLY',
                    bank_branch_number: selectedItem,
                    ...(accountNumber && { accountNumber }),
                })
                    .unwrap()
                    .then(() => {
                        showSuccessModal()
                        setSelectedItem('')
                    })
                    .catch(() => {})
            }
        }, [
            accountNumber,
            createDebitCard,
            productId,
            selectedItem,
            showSuccessModal,
        ])

        return (
            <Box mt="24px">
                <Box mt={4}>
                    <StyledSearch
                        sx={{ width: '500px' }}
                        placeholder="Поиск по адресу"
                        size="long"
                        onChange={onChangeInput}
                        value={value}
                        InputProps={{
                            startAdornment: (
                                <>
                                    <InputAdornment
                                        position="start"
                                        sx={{ margin: '0px 19px' }}
                                    >
                                        <SearchIcon />
                                    </InputAdornment>
                                    <InputAdornment
                                        position="end"
                                        sx={closeButtonStyles}
                                    >
                                        {value && (
                                            <IconButton
                                                onClick={() => setValue('')}
                                            >
                                                <CloseBtn />
                                            </IconButton>
                                        )}
                                    </InputAdornment>
                                </>
                            ),
                        }}
                    />
                    <StyledContentContainerSmall sx={bankListBoxStyles.mainBox}>
                        {bankList
                            .filter((bank: BankBranchesState) =>
                                bank.branchAddress
                                    .toLowerCase()
                                    .includes(value.toLocaleLowerCase())
                            )
                            .map((bank) => (
                                <PickPersonallyTabItem
                                    bank={bank}
                                    isSelected={
                                        selectedItem === bank.branchNumber
                                    }
                                    setSelectedItem={setSelectedItem}
                                />
                            ))}
                    </StyledContentContainerSmall>
                </Box>
                <Button
                    type="submit"
                    size="medium"
                    buttonVariant="primary"
                    sx={{ marginTop: '27px' }}
                    disabled={!selectedItem}
                    onClick={handleSubmit}
                >
                    Заказать
                </Button>
            </Box>
        )
    }
)
