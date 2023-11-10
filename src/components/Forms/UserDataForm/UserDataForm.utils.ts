import { FormData } from './UserDataForm.type'

export const prepareInitialValues = (initialValues: Partial<FormData>) => ({
    ...initialValues,
    phoneNumber: `+${initialValues.phoneNumber}`,
})
