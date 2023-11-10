import { memo } from 'react'
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    Typography,
} from '@mui/material'

import { ModalActionButton } from '../../Modal/ModalActionButton/ModalActionButton'

import { CardStatementModalContent } from './CardStatementModalContent'

import { socials } from './CardStatementModal.const'

import {
    dialogActionsStyles,
    dialogContentStyles,
    dialogStyles,
} from '../../Modal/ModalRegions/ModalRegion.style'
import { boxStyles } from './CardStatementModal.style'

import { ModalProps } from './CardsStatementModal.type'

export const CardStatementModal = memo(
    ({
        showModal,
        closeModal,
        text = 'Поделиться выпиской с карты',
    }: ModalProps) => {
        const dialogActionsStylesSx = dialogActionsStyles()

        const searchCityStylesSx = dialogStyles({
            modalVariant: 'searchCity',
        })

        return (
            <Dialog
                sx={searchCityStylesSx}
                open={showModal}
                onClose={closeModal}
            >
                <DialogContent sx={dialogContentStyles}>
                    <DialogActions sx={dialogActionsStylesSx}>
                        <ModalActionButton
                            modalAction="close"
                            onClick={closeModal}
                        />
                    </DialogActions>

                    <Box sx={boxStyles}>
                        <Typography variant="body1" component="h2">
                            {text}
                        </Typography>

                        <CardStatementModalContent content={socials} />
                    </Box>
                </DialogContent>
            </Dialog>
        )
    }
)
