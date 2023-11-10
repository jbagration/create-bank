import { FC } from 'react'
import { Typography } from '@mui/material'

export const UploadTitle: FC = () => {
    return (
        <>
            <Typography variant="h5" textAlign="center" pb={4}>
                Загрузка документов
            </Typography>
            <Typography variant="body1" textAlign="center">
                Размер загружаемого файла не должен превышать 16 МБ.
            </Typography>
            <Typography variant="body1" textAlign="center" pb="30px">
                Общий размер загружаемых документов не может превышать 20МБ.
            </Typography>
        </>
    )
}
