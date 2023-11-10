import { useLazySetUserInfoQuery } from 'src/redux/api/authApi'
import { useSetEmailMutation } from 'src/redux/api/notificationApi'
import { useLazyCheckIfPhoneNumberExistsQuery } from 'src/redux/api/registrationApi'
import { useUpdatePhoneNumberMutation } from 'src/redux/api/userApi'

import { FormData, FormDirtyFields } from '../UserDataForm.type'

export const useUserDataFormSubmit = (
    dirtyFields: Partial<Readonly<FormDirtyFields>>,
    setStatusSuccess: () => void
) => {
    const [checkPhoneNumberExists] = useLazyCheckIfPhoneNumberExistsQuery()
    const [updatePhoneNumber] = useUpdatePhoneNumberMutation()
    const [updateEmail] = useSetEmailMutation()
    const [setUserInfo] = useLazySetUserInfoQuery()

    return async ({
        phoneNumber,
        email,
    }: Pick<FormData, 'phoneNumber' | 'email'>) => {
        const isPhoneNumberChanged = dirtyFields.phoneNumber
        const isEmailChanged = dirtyFields.email
        const requests = []

        if (isPhoneNumberChanged) {
            const { mobilePhone } = await checkPhoneNumberExists(
                phoneNumber.replace(/[^0-9.]/g, '')
            ).unwrap()
            requests.push(updatePhoneNumber({ mobilePhone }).unwrap())
        }
        if (isEmailChanged) {
            requests.push(updateEmail({ newEmail: email }).unwrap())
        }

        Promise.all(requests)
            .then(() => setUserInfo().unwrap())
            .then(() => setStatusSuccess())
    }
}
