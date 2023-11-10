import React, { FC, memo, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux'
import { setFetchError } from 'src/redux/slices/auth'
import { ErrorComponent } from 'src/UI-components/organisms'
import { Box } from '@mui/material'

import { errorImageStyles } from '../ErrorPage/ErrorPage.style'

export const NoInternetConnection: FC<{ children: JSX.Element }> = memo(
    ({ children }) => {
        const isFetchError = useAppSelector((state) => state.auth.isFetchError)

        const dispatch = useAppDispatch()

        const [isOnline, setOnline] = useState(true)

        useEffect(() => {
            setOnline(navigator.onLine)
        }, [])

        window.addEventListener('online', () => {
            setOnline(true)
            dispatch(setFetchError(false))
        })

        window.addEventListener('offline', () => {
            setOnline(false)
        })

        if (isFetchError && !isOnline) {
            return (
                <ErrorComponent
                    title="Нет подключения к интернету"
                    text="Проверьте подключение и попробуйте еще раз"
                    sx={{ width: '660px' }}
                    imgStyles={errorImageStyles}
                    isSideBar
                    isModalActionButton={false}
                    isButton={false}
                />
            )
        }

        return (
            <>
                <Box
                    sx={{
                        ...errorImageStyles,
                        position: 'absolute',
                        opacity: 0,
                    }}
                />
                {children}
            </>
        )
    }
)
