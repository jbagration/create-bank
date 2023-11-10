import { FC } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CloseIcon from '@mui/icons-material/Close'
import { DialogTitle, IconButton } from '@mui/material'

import { helpModalButtonStyle } from './HelpModal.style'

interface HelpModalHeaderProps {
    modalContent: 'main' | 'call'
    setDefaultContent: () => void
    onClose: () => void
}

export const HelpModalHeader: FC<HelpModalHeaderProps> = ({
    modalContent,
    setDefaultContent,
    onClose,
}) => (
    <DialogTitle sx={{ m: 0, p: 2 }}>
        {modalContent !== 'main' && (
            <IconButton
                aria-label="back"
                onClick={setDefaultContent}
                sx={helpModalButtonStyle('left')}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
        )}
        <IconButton
            aria-label="close"
            onClick={onClose}
            sx={helpModalButtonStyle('right')}
        >
            <CloseIcon />
        </IconButton>
    </DialogTitle>
)
