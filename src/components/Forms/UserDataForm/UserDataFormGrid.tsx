import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'

import { Button } from '../../../UI-components/atoms'
import { InputHandler } from '../../../UI-components/molecules'

import { UserDataFormGridProps } from './UserDataForm.type'

export const UserDataFormGrid: FC<UserDataFormGridProps> = ({
    initialValues,
    setStatusReadonlyFieldTouched,
    isSubmitDisabled,
    handleInputChange,
    info,
}) => {
    const navigate = useNavigate()

    return (
        <Grid
            display="grid"
            gridTemplateColumns="repeat(2, auto)"
            justifyContent="space-between"
        >
            <Grid container direction="column" rowSpacing={6}>
                <Grid item>
                    <InputHandler
                        size="long"
                        type="text"
                        name="firstName"
                        staticLabel="Имя"
                        readOnly
                        onFocus={setStatusReadonlyFieldTouched}
                    />
                </Grid>
                <Grid item>
                    <InputHandler
                        size="long"
                        type="text"
                        name="lastName"
                        staticLabel="Фамилия"
                        readOnly
                        onFocus={setStatusReadonlyFieldTouched}
                    />
                </Grid>
                {initialValues.middleName && (
                    <Grid item>
                        <InputHandler
                            size="long"
                            type="text"
                            name="middleName"
                            staticLabel="Отчество"
                            readOnly
                            onFocus={setStatusReadonlyFieldTouched}
                        />
                    </Grid>
                )}
                <Grid item>
                    <InputHandler
                        size="long"
                        type="text"
                        name="passportNumber"
                        staticLabel="Номер паспорта"
                        readOnly
                        onFocus={setStatusReadonlyFieldTouched}
                    />
                </Grid>
            </Grid>
            <Grid container direction="column" rowSpacing={6}>
                <Grid item>
                    <InputHandler
                        type="tel"
                        name="phoneNumber"
                        size="long"
                        staticLabel="Номер телефона"
                        onChange={handleInputChange}
                        info={info}
                    />
                </Grid>
                <Grid item>
                    <InputHandler
                        size="long"
                        type="text"
                        name="email"
                        staticLabel="Email"
                        placeholder="Email"
                    />
                </Grid>
                <Grid item display="flex" justifyContent="center" gap={8}>
                    <Button
                        type="submit"
                        size="medium"
                        disabled={isSubmitDisabled}
                    >
                        Сохранить
                    </Button>
                    <Button
                        type="button"
                        size="medium"
                        onClick={() => navigate('/user_main')}
                        cancel
                    >
                        Отмена
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
