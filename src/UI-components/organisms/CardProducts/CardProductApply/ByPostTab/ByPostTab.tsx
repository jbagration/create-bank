import { FC, memo } from 'react'
import { Button, Caption, DropdownMenu } from 'src/UI-components/atoms'
import { FormHandler, InputHandler } from 'src/UI-components/molecules'
import {
    limitRepeatingCharacters,
    removeCharsFromTheEnd,
    separators,
} from 'src/utils'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Box, Typography } from '@mui/material'

import { useByPostTab } from './useByPostTab'

import { inputsByPostTabData } from './ByPostTab.const'

import {
    captionContentStyles,
    captionStyles,
    iconStyles,
    inputStyles,
} from './ByPostTab.style'

import { TabProps } from '../CardProductApply.type'

export const ByPostTab: FC<TabProps> = memo(
    ({ showSuccessModal, productId, accountNumber, createDebitCard }) => {
        const { handleSubmit, isValid, methods } = useByPostTab({
            showSuccessModal,
            productId,
            accountNumber,
            createDebitCard,
        })

        return (
            <Box>
                <Caption component sx={captionStyles}>
                    <Box sx={captionContentStyles}>
                        <InfoOutlinedIcon sx={iconStyles} fontSize="small" />
                        <Typography variant="body2">
                            Доставка бесплатная и доступна только на территории
                            РФ.
                        </Typography>
                    </Box>
                </Caption>

                <Box sx={{ width: '437px' }}>
                    <FormHandler
                        flex="true"
                        gapCount="24px"
                        methods={methods}
                        onSubmit={handleSubmit}
                    >
                        <DropdownMenu
                            autosize="true"
                            sx={inputStyles}
                            placeholder="Город"
                            label="Город"
                            name="city"
                            size="long"
                            defaultValue=""
                            options={[
                                { text: 'Москва', divider: true },
                                { text: 'Казань', divider: true },
                                { text: 'Санкт-Петербург', divider: true },
                            ]}
                        />
                        {inputsByPostTabData.map((inputData) => {
                            return (
                                <Box key={inputData.name}>
                                    <InputHandler
                                        autosize="true"
                                        sx={inputStyles}
                                        placeholder={inputData.placeholder}
                                        label={inputData.label}
                                        type="text"
                                        size="long"
                                        defaultValue=""
                                        maxLength={inputData.maxLength}
                                        name={inputData.name}
                                        transformValue={limitRepeatingCharacters(
                                            separators
                                        )}
                                        transformValueOnBlur={removeCharsFromTheEnd(
                                            separators
                                        )}
                                    />
                                </Box>
                            )
                        })}
                        <Button
                            type="submit"
                            size="medium"
                            buttonVariant="primary"
                            disabled={!isValid}
                        >
                            Заказать
                        </Button>
                    </FormHandler>
                </Box>
            </Box>
        )
    }
)
