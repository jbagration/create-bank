import { FC, useLayoutEffect, useState } from 'react'
import { Button } from 'src/UI-components/atoms'
import { Box, Dialog, DialogContent, Typography } from '@mui/material'

import { HelpModalCallOption } from './HelpModalCallOption'
import { HelpModalHeader } from './HelpModalHeader'
import { HelpModalOptions } from './HelpModalOptions'

import { mainMessage, optionCall } from './HelpModal.const'

import {
    helpModalBoxStyle,
    helpModalStyle,
    helpModalTitleStyle,
} from './HelpModal.style'

interface HelpModalProps {
    isOpen: boolean
    onClose: () => void
}

export const HelpModal: FC<HelpModalProps> = ({ isOpen, onClose }) => {
    const [modalContent, setModalContent] = useState<'main' | 'call'>('main')

    const setDefaultContent = () => {
        setModalContent('main')
    }

    useLayoutEffect(() => {
        if (isOpen) setDefaultContent()
    }, [isOpen])

    return (
        <Dialog open={isOpen} onClose={onClose} disableEscapeKeyDown>
            <DialogContent sx={helpModalStyle}>
                <Box sx={helpModalBoxStyle}>
                    <HelpModalHeader
                        modalContent={modalContent}
                        setDefaultContent={setDefaultContent}
                        onClose={onClose}
                    />
                    <Typography variant="subtitle2" sx={helpModalTitleStyle}>
                        {modalContent === 'main' && mainMessage}
                        {modalContent === 'call' && optionCall}
                    </Typography>
                    {modalContent === 'main' && (
                        <HelpModalOptions setModalContent={setModalContent} />
                    )}
                    {modalContent === 'call' && <HelpModalCallOption />}
                    <Button
                        size="medium"
                        buttonVariant="secondary"
                        onClick={onClose}
                    >
                        Не сейчас
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}
