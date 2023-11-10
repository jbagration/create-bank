import { useLazyGetCreditsQuery } from 'src/redux/api/creditApi'
import { useAppDispatch } from 'src/redux/hooks/redux'
import { logout } from 'src/redux/slices/auth'
import { Button } from 'src/UI-components/atoms'
import { Header } from 'src/UI-components/molecules'
import { storage } from 'src/utils'
import { Typography } from '@mui/material'

export const MockUserProfile = () => {
    const dispatch = useAppDispatch()
    const [fetchCredits, { data }] = useLazyGetCreditsQuery()
    return (
        <div>
            <Header main={false} />
            <Typography color="darkgreen" variant="h3">
                {JSON.stringify(data)}
            </Typography>
            <Button
                size="medium"
                buttonVariant="primary"
                onClick={() => {
                    dispatch(logout({ isAutoLogout: false }))
                    storage.remove('accessToken')
                    storage.remove('refreshToken')
                }}
            >
                Logout
            </Button>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                    size="medium"
                    buttonVariant="primary"
                    onClick={() => {
                        fetchCredits()
                    }}
                >
                    Access Token Check
                </Button>
            </div>
        </div>
    )
}
