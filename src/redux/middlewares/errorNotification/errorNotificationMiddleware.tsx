import { toast } from 'react-toastify'
import { setFetchError } from 'src/redux/slices/auth'
import type { Middleware } from '@reduxjs/toolkit'
import { isRejectedWithValue } from '@reduxjs/toolkit'

import {
    badRequest,
    FETCH_ERROR,
    serverError,
    sessionTimedOut,
} from './errorNotificationMiddleware.const'

export const errorNotificationMiddleware: Middleware =
    (store) => (next) => (action) => {
        const isAutoLogout = action.payload?.isAutoLogout
        const isAuth = store.getState().auth.isAuthenticated

        if (isAutoLogout && isAuth) {
            toast.error(`${sessionTimedOut}`)
        }

        if (isRejectedWithValue(action)) {
            const key = action.meta.arg.endpointName

            if (action.payload.status === 500) {
                toast.error(`${serverError}`, {
                    toastId: key,
                })
            }
            if (action.payload.status === 400) {
                toast.error(`${badRequest}`, {
                    toastId: key,
                })
            }

            if (action.payload.status === FETCH_ERROR) {
                store.dispatch(setFetchError(true))
            }
        }

        return next(action)
    }
