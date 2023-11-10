import { Dispatch, FC, SetStateAction } from 'react'
import { CallIn, Mail, Message, Phone } from 'src/assets'
import { useTheme } from '@mui/material'

import { HelpModalOption, HelpModalOptionsGrid } from './HelpModalOptionsGrid'

import {
    mailAddress,
    optionCall,
    optionCallIn,
    optionChat,
    optionMail,
} from './HelpModal.const'

interface HelpModalOptionsProps {
    setModalContent: Dispatch<SetStateAction<'main' | 'call'>>
}

export const HelpModalOptions: FC<HelpModalOptionsProps> = ({
    setModalContent,
}) => {
    const handleSetContentToCall = () => {
        setModalContent('call')
    }

    const theme = useTheme()
    const { TextQuaternary, TextDisabled } = theme.palette.Text

    return (
        <HelpModalOptionsGrid>
            <HelpModalOption
                icon={
                    <Message width="20px" height="20px" fill={TextDisabled} />
                }
                text={optionChat}
                disabled
            />
            <HelpModalOption
                icon={
                    <Phone width="20px" height="20px" fill={TextQuaternary} />
                }
                text={optionCall}
                onClick={handleSetContentToCall}
            />
            <HelpModalOption
                icon={<Mail width="20px" height="20px" fill={TextQuaternary} />}
                text={optionMail}
                linkTo={mailAddress}
            />
            <HelpModalOption
                icon={<CallIn width="20px" height="20px" fill={TextDisabled} />}
                text={optionCallIn}
                disabled
            />
        </HelpModalOptionsGrid>
    )
}
