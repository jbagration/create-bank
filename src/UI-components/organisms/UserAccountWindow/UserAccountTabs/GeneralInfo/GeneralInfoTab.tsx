import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataForm } from 'src/components/Forms/UserDataForm/UserDataForm'
import { Grid } from '@mui/material'

import { useAppSelector } from '../../../../../redux/hooks/redux'
import { Button } from '../../../../atoms'

import { userAccountTabBox } from '../UserAccountTabBox.style'

import { TabBoxProps } from '../UserAccountTabBox.type'

export const GeneralInfoTab: FC<TabBoxProps> = ({ labelPadding = true }) => {
    const navigate = useNavigate()
    const userData = useAppSelector((state) => state.auth.user)

    const userAccountTabBoxStyles = userAccountTabBox({
        labelPadding,
        type: 'notifications',
    })

    return (
        <Grid sx={userAccountTabBoxStyles}>
            <UserDataForm
                formId="UserDataForm"
                initialValues={{
                    firstName: userData?.firstName,
                    lastName: userData?.lastName,
                    middleName: userData?.middleName,
                    passportNumber: userData?.passportNumber,
                    phoneNumber: userData?.mobilePhone,
                    email: userData?.email,
                }}
            />
            <Button
                size="long"
                type="button"
                cancel
                sx={{ marginTop: '40px' }}
                onClick={() => navigate('upload')}
            >
                Мои документы
            </Button>
        </Grid>
    )
}
