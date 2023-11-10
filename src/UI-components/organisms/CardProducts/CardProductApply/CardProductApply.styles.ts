import { whiteColor } from 'src/themes/colors/white'
import { SxProps } from '@mui/material'

import iconBank3 from '../../../../assets/svg/bankIconBancomat.svg'
import iconBank1 from '../../../../assets/svg/bankIconCentral.svg'
import iconBank2 from '../../../../assets/svg/bankIconTerminal.svg'

import { CardProductBoxStylesProps } from './CardProductApplyModal.type'

export const bankIconCentral = iconBank1
export const bankIconTerminal = iconBank2
export const bankIconBancomat = iconBank3

export const cardApplyStyles = {
    backgroundColor: 'rgba(255, 187, 51, 0.12)',
    width: '522px',
    padding: ' 14px',
    marginTop: '39px',
    marginBottom: '24px',
} as const

export const CardProductBoxStyles: (
    props: CardProductBoxStylesProps
) => SxProps = ({ active }) => {
    return {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: '0',
        left: '0',
        transform: active ? 'scale(1)' : 'scale(0)',
        zIndex: 1,
    }
}

export const cardApplyModalStyles = {
    main: {
        backgroundColor: '#ffffff',
        padding: '40px 46px 60px 46px',
        color: whiteColor[0],
        fontSize: '16px',
        lineHeight: '24px',
        minWidth: '600px',
        borderRadius: '8px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    mainBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    text: {
        padding: '0',
        margin: '0',
    },
    textPhone: {
        color: '#9e9e9e',
    },
    btn: {
        position: 'absolute',
        top: '16px',
        right: '16px',
        cursor: 'pointer',
        outline: 'none',
        backgroundColor: 'inherit',
        border: 'none',
    },
    imgBtn: {
        width: '24px',
        height: '24px',
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgDone: {
        width: '80px',
        height: '80px',
    },
    textSupport: {
        marginLeft: '12px',
    },
    textCenter: {
        textAlign: 'center',
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '16px',
    },
    phone: {
        marginRight: '22px',
        marginLeft: '22px',
    },
} as const
