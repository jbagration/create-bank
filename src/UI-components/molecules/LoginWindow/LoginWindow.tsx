import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'

import { LoginForm } from '../../../components/Forms'
import { Button } from '../../atoms'

import { loginWindowStyles } from './LoginWindow.style'

import { LoginWindowProps } from './LoginWindow.type'

export const LoginWindow: FC<LoginWindowProps> = ({
    top,
    right,
    position = 'static',
}) => {
    const navigate = useNavigate()

    const loginWindowStylesSx = loginWindowStyles({ top, right, position })

    return (
        <Box sx={loginWindowStylesSx}>
            <Typography textAlign="center" variant="h3">
                Вход
            </Typography>
            <LoginForm formId="LoginForm" />
            <Grid mt={3} mb={4} container justifyContent="space-between">
                <Typography
                    variant="textLink2"
                    sx={{
                        textDecoration: 'underline',
                        textDecorationSkipInk: 'none',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/passwordRecovery')}
                >
                    Забыли пароль?
                </Typography>
            </Grid>
            <Button
                size="long"
                buttonVariant="secondary"
                onClick={() => navigate('/registration')}
            >
                Зарегистрироваться
            </Button>
        </Box>
    )
}
