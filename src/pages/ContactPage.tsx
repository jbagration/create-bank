import { FC, memo } from 'react'
import { Typography } from '@mui/material'

import { FooterPanel } from '../UI-components/molecules'
import { ContactCenterBlock } from '../UI-components/molecules/ContactCenter/ContactCenterBlock'
import { ContactSocialMedia } from '../UI-components/molecules/ContactCenter/ContactSocialMedia'
import { Header } from '../UI-components/molecules/Header/Header'
import { ModalActionButton } from '../UI-components/molecules/Modal/ModalActionButton/ModalActionButton'

import {
    StyledContentContainerLarge,
    StyledContentContainerSmall,
} from '../UI-components/molecules/Containers/Containers.style'
import { contentStyles, titleStyles } from './ContactPage.style'

export const ContactPage: FC = memo(() => {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div>
                <div style={{ marginLeft: '-15px' }}>
                    <Header main={false} />
                </div>
                <StyledContentContainerLarge sx={{ paddingBottom: 0 }}>
                    <ModalActionButton
                        modalAction="back"
                        data-testid="contact-back-button"
                    />
                    <Typography
                        variant="h5"
                        sx={titleStyles}
                        data-testid="contact-page-title"
                    >
                        Телефоны Контакт-центра
                    </Typography>
                </StyledContentContainerLarge>
                <StyledContentContainerSmall sx={contentStyles}>
                    <ContactCenterBlock />
                </StyledContentContainerSmall>
                <StyledContentContainerSmall sx={contentStyles}>
                    <ContactSocialMedia />
                </StyledContentContainerSmall>
            </div>
            <div style={{ marginTop: 'auto' }}>
                <FooterPanel />
            </div>
        </div>
    )
})
