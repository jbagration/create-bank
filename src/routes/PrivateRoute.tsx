import React, { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../redux/hooks/redux'

interface PrivateRouteProps {
    children: ReactNode
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    const isAuth: boolean = useAppSelector(
        (state) => state.auth.isAuthenticated
    )
    return isAuth ? <>{children}</> : <Navigate to="/login" replace />
}
