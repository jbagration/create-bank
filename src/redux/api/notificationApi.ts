import { api } from './api'

export interface Notifications {
    email: string
    emailSubscription: boolean
    pushNotification: boolean
    smsNotification: boolean
}

export const notificationApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllNotifications: builder.query<Notifications, void>({
            query: () => 'user/settings/notifications/all',
            providesTags: (result) => ['Email', 'Sms', 'Push', 'EmailStatus'],
        }),
        setEmail: builder.mutation<void, any>({
            query: (body) => ({
                url: `user/settings/email`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Email'],
        }),
        setEmailStatus: builder.mutation<void, any>({
            query: (body) => ({
                url: `user/settings/notifications/email`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['EmailStatus'],
        }),
        setPushStatus: builder.mutation<void, any>({
            query: (body) => ({
                url: `user/settings/notifications/push`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Push'],
        }),
        setSmsStatus: builder.mutation<void, any>({
            query: (body) => ({
                url: `user/settings/notifications/sms`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Sms'],
        }),
    }),
})

export const {
    useGetAllNotificationsQuery,
    useSetEmailMutation,
    useSetEmailStatusMutation,
    useSetSmsStatusMutation,
    useSetPushStatusMutation,
} = notificationApi
