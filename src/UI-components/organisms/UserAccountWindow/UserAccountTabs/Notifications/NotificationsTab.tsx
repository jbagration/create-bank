import { FC } from 'react'
import { textMainStyles } from 'src/common/common.styles'
import { Grid, Typography } from '@mui/material'

import {
    useGetAllNotificationsQuery,
    useSetEmailStatusMutation,
    useSetPushStatusMutation,
    useSetSmsStatusMutation,
} from '../../../../../redux/api/notificationApi'
import { Switcher } from '../../../../atoms'

import { NotificationForm } from './NotificationsForm'

import { switcherContainerStyles } from './Notifications.style'

import { TabBoxProps } from '../UserAccountTabBox.type'

export const NotificationsTab: FC<TabBoxProps> = () => {
    const { data: notifications } = useGetAllNotificationsQuery()

    const [updateEmailStatus] = useSetEmailStatusMutation()
    const [updatePushStatus] = useSetPushStatusMutation()
    const [updateSmsStatus] = useSetSmsStatusMutation()

    const handleEmailStatus = () => {
        updateEmailStatus({
            notificationStatus: !notifications?.emailSubscription,
        })
    }
    const handlePushStatus = () => {
        updatePushStatus({
            notificationStatus: !notifications?.pushNotification,
        })
    }
    const handleSmsStatus = () => {
        updateSmsStatus({
            notificationStatus: !notifications?.smsNotification,
        })
    }

    return (
        <Grid mt="56px">
            {notifications && (
                <>
                    <Grid sx={{ width: '100%' }}>
                        <Typography
                            data-title="profile-notification"
                            variant="buttonMedium"
                            sx={textMainStyles}
                        >
                            {notifications.email
                                ? 'Чтобы изменить свой адрес электронной почты'
                                : 'Для получения Email-рассылки'}
                        </Typography>
                        <Typography
                            data-caption="profile-notification"
                            variant="body2"
                            mb={6}
                            mt={4}
                            sx={textMainStyles}
                        >
                            {notifications.email
                                ? 'Нажмите на кнопку "Изменить" ниже, чтобы изменить свой адрес электронной почты, на который вы получаете новостную рассылку'
                                : 'Введите адрес электронной почты, чтобы подписаться на рассылку'}
                        </Typography>
                    </Grid>

                    <NotificationForm email={notifications.email} />

                    <Grid sx={switcherContainerStyles}>
                        <Switcher
                            handleClick={handleEmailStatus}
                            isDisabled={!notifications.email}
                            isToggled={notifications.emailSubscription}
                            title="Email-рассылка"
                        />

                        <Switcher
                            handleClick={handlePushStatus}
                            isToggled={notifications.pushNotification}
                            title="PUSH-уведомление"
                        />

                        <Switcher
                            handleClick={handleSmsStatus}
                            isToggled={notifications.smsNotification}
                            title="SMS-уведомление"
                        />
                    </Grid>
                </>
            )}
        </Grid>
    )
}
