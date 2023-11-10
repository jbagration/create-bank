import { FC } from 'react'
import { Grid } from '@mui/material'

import { Button } from '../../../../atoms'
import { FormHandler } from '../../../../molecules'

import {
    ControlQuestionChangeForm,
    PasswordChangeForm,
    SecurityFormsModal,
} from './SecurityForms'
import { useSecurityForm } from './useSecurityForm'

import { userAccountTabBox } from '../UserAccountTabBox.style'
import { buttonsContainerStyles } from './SecurityTab.style'

import { TabBoxProps } from '../UserAccountTabBox.type'

export const SecurityTab: FC<TabBoxProps> = () => {
    const {
        isOpen,
        methods,
        handleSubmit,
        isDisabled,
        handleReset,
        setOpen,
        message,
        isPasswordErr,
        isQuestionErr,
    } = useSecurityForm()

    const userAccountTabBoxStyles = userAccountTabBox({ labelPadding: false })

    return (
        <FormHandler methods={methods} onSubmit={handleSubmit}>
            <Grid sx={userAccountTabBoxStyles}>
                <PasswordChangeForm />
                <ControlQuestionChangeForm methods={methods} />
            </Grid>
            <Grid sx={buttonsContainerStyles}>
                <Button type="submit" size="medium" disabled={isDisabled}>
                    Сохранить
                </Button>
                <Button
                    type="button"
                    size="medium"
                    onClick={handleReset}
                    cancel
                >
                    Отмена
                </Button>
            </Grid>

            <SecurityFormsModal
                isOpen={isOpen}
                setOpen={setOpen}
                error={isPasswordErr && isQuestionErr}
                message={message}
            />
        </FormHandler>
    )
}
