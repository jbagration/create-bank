import { FC, useEffect, useState } from 'react'
import {
    controlQuestions as questions,
    DropdownMenu,
} from 'src/UI-components/atoms'
import { InputHandler } from 'src/UI-components/molecules'
import {
    charactersLimitSecurityQuestion,
    limitRepeatingCharacters,
    removeCharsFromTheEnd,
    separators,
} from 'src/utils'
import { Box, Grid, Typography } from '@mui/material'

import { tabColumnStyles } from '../../../UserAccountTabBox.style'

import { TabBoxProps } from '../../../UserAccountTabBox.type'

export const ControlQuestionChangeForm: FC<TabBoxProps> = ({ methods }) => {
    const [dropdownValue, setDropdownValue] = useState('')

    useEffect(() => {
        if (dropdownValue === 'Написать свой вопрос') {
            methods?.setValue('securityQuestion', '')
        } else {
            methods?.setValue('securityQuestion', dropdownValue)
        }
    }, [dropdownValue, methods, methods?.setValue])

    return (
        <Grid sx={tabColumnStyles}>
            <Typography variant="buttonMedium">
                Изменить контрольный вопрос
            </Typography>
            <Typography variant="body2" mb={8} mt={4}>
                Выберите контрольный вопрос из списка или введите свой вопрос,
                затем напишите ответ на контрольный вопрос
            </Typography>

            <DropdownMenu
                size="long"
                options={questions}
                placeholder="Выберите контрольный вопрос"
                label="Выберите контрольный вопрос"
                getValue={(value) => setDropdownValue(value)}
            />
            {dropdownValue === 'Написать свой вопрос' && (
                <Box mt={6}>
                    <InputHandler
                        name="securityQuestion"
                        size="long"
                        type="text"
                        placeholder="Напишите свой вопрос"
                        label="Напишите свой вопрос"
                        multiline
                        transformValue={limitRepeatingCharacters(separators)}
                        transformValueOnBlur={removeCharsFromTheEnd(separators)}
                        isCounter
                        countLimit={charactersLimitSecurityQuestion}
                    />
                </Box>
            )}
            <Box mt={6}>
                <InputHandler
                    name="securityAnswer"
                    size="long"
                    type="text"
                    placeholder="Напишите ответ на контрольный вопрос"
                    label="Напишите ответ на контрольный вопрос"
                    multiline
                    transformValue={limitRepeatingCharacters(separators)}
                    transformValueOnBlur={removeCharsFromTheEnd(separators)}
                    isCounter
                    countLimit={charactersLimitSecurityQuestion}
                />
            </Box>
        </Grid>
    )
}
