import { FC } from 'react'

import { ContactItem } from './ContactItem'

import { contactInfo } from './ContactCenter.const'

export const ContactCenterBlock: FC = () => {
    return (
        <ContactItem
            title={contactInfo.title}
            icon={contactInfo.icon}
            description={contactInfo.description}
            workTime={contactInfo.workTime}
        />
    )
}
