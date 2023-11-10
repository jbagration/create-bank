import { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material'

import { InputHandler } from '../../../../../../molecules'

import { tabColumnStyles } from '../../../UserAccountTabBox.style'

import { TabBoxProps } from '../../../UserAccountTabBox.type'

export const PasswordChangeForm: FC<TabBoxProps> = () => {
    return (
        <Grid sx={tabColumnStyles}>
            <Typography variant="buttonMedium">Изменить пароль</Typography>
            <Typography variant="body2" mb={8} mt={4} maxWidth={343}>
                Введите текущий пароль, затем введите новый пароль и его
                подтверждение
            </Typography>

            <InputHandler
                size="long"
                type="password"
                name="currentPassword"
                label="Введите текущий пароль"
                placeholder="Введите текущий пароль"
            />

            <Box mt={8}>
                <InputHandler
                    size="long"
                    type="password"
                    name="password"
                    label="Введите новый пароль"
                    placeholder="Введите новый пароль"
                />
            </Box>

            <Box mt={8}>
                <InputHandler
                    size="long"
                    type="password"
                    name="confirmPassword"
                    label="Подтвердите новый пароль"
                    placeholder="Подтвердите новый пароль"
                />
            </Box>
        </Grid>
    )
}
