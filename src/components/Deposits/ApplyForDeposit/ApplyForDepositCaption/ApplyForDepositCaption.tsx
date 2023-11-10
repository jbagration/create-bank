import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/UI-components/atoms'
import { Typography } from '@mui/material'

export const ApplyForDepositCaption: FC = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/user_main')
    }

    return (
        <>
            <Typography variant="body1" component="h2" mt="40px" color="red">
                У Вас нет дебетовых карт
            </Typography>
            <Button
                variant="contained"
                size="large"
                href="#"
                onClick={handleClick}
                sx={{ marginTop: '20px' }}
            >
                На главную
            </Button>
        </>
    )
}
