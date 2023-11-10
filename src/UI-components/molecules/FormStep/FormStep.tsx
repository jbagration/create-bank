import { Grid } from '@mui/material'

import { DropdownMenu } from '../../atoms'
import { Input } from '../../atoms/Input/Input'

import { controlQuestions as questions } from '../../atoms/DropdownMenu/DropdownMenu.const'

export const FormStep = () => {
    return (
        <>
            <DropdownMenu
                size="long"
                options={questions}
                placeholder="Выберите контрольный вопрос"
                label="Выберите контрольный вопрос"
            />

            <Grid mt={6}>
                <Input
                    name="customControlQuestion"
                    size="long"
                    type="text"
                    placeholder="Напишите свой вопрос"
                    label="Напишите свой вопрос"
                    multiline
                />
            </Grid>

            <Grid mt={6}>
                <Input
                    name="controlQuestionAnswer"
                    size="long"
                    type="text"
                    placeholder="Напишите ответ на контрольный вопрос"
                    label="Напишите ответ на контрольный вопрос"
                    multiline
                />
            </Grid>
        </>
    )
}
