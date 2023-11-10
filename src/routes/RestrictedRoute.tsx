import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../redux/hooks/redux'

type Props = PropsWithChildren<{
    children: JSX.Element
}>

export const RestrictedRoute: FC<Props> = ({ children }) => {
    const isAuth = useAppSelector((state) => state.auth.isAuthenticated)

    return isAuth ? <Navigate to="/user_main" replace /> : children
}
