import type { Middleware } from '@reduxjs/toolkit'

import { api } from '../../api/api'
import { logout } from '../../slices/auth'

export const logoutMiddleware: Middleware = ({ dispatch }) => {
    return (next) => (action) => {
        if (action.type === logout.type) {
            dispatch(api.util.resetApiState())
        }

        return next(action)
    }
}
