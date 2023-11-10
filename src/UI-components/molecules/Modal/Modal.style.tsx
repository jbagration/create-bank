import { SxProps } from '@mui/material'

import { ModalStylesProps } from './Modal.type'

export const BorderRadius = '8px'

export const modalDialogContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    overflow: 'visible',
}

export const modalDialogActionsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    height: '24px',
    marginBottom: '16px',
}

export const modalActionStyles: (props: ModalStylesProps) => SxProps = ({
    isModalFinished,
    isCloseBtnVisible,
}) => {
    return {
        display: 'flex',
        justifyContent:
            isModalFinished && isCloseBtnVisible ? 'flex-end' : 'space-between',
        padding: 0,
        height: '24px',
    }
}
