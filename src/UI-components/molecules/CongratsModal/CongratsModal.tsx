import React from 'react'
import { DialogContent, Typography } from '@mui/material'
import { Box } from '@mui/system'

import CongratsImage from '../../../assets/img/CongratsModal/congrats.svg'

import { Button } from '../../atoms'
import { modalDialogContentStyles, NewDialog } from '../Modal'

import { titleStyles } from './CongratsModal.styles'

export interface Props {
    show: boolean
    title: string
    children?: React.ReactNode
}

export type ModalProps = Props

export const CongratsModal = React.memo(
    ({ title, show = true }: ModalProps) => {
        return (
            <NewDialog type="congrats" open={show}>
                <Typography variant="h3" sx={titleStyles}>
                    {title}
                </Typography>

                <DialogContent sx={modalDialogContentStyles}>
                    <Typography
                        variant="subtitle2"
                        sx={{ textAlign: 'center' }}
                    >
                        Вы успешно зарегистрировались в&nbsp;CreateBank Online!
                    </Typography>

                    <Box
                        sx={{
                            margin: '32px auto',
                            width: '327px',
                            height: '235px',
                            backgroundImage: `url(${CongratsImage})`,
                            backgroundSize: 'cover',
                        }}
                    />

                    <Button variant="contained" size="long" href="#">
                        Войти
                    </Button>
                </DialogContent>
            </NewDialog>
        )
    }
)
