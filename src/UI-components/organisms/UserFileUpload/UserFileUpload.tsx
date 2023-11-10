import { Preloader } from 'src/assets/svg'
import {
    useGetUserVerificationDocumentsQuery,
    useNewDocumentsMutation,
} from 'src/redux/api/userVerificationApi'
import { UploadFiles } from 'src/UI-components/molecules/UploadFiles/UploadFiles'
import { uploadVerificationDocumentsSchema } from 'src/utils'

import { UserInputInfo } from './UserFileUpload.const'

export const UserFileUpload = () => {
    const { data, isLoading } = useGetUserVerificationDocumentsQuery()

    const [uploadDocuments] = useNewDocumentsMutation()

    if (isLoading) {
        return <Preloader />
    }

    return (
        <UploadFiles
            inputInfo={UserInputInfo}
            validationShema={uploadVerificationDocumentsSchema(
                UserInputInfo.map((item) => item.name)
            )}
            uploadDocuments={uploadDocuments}
            isFilesOnServer={!!data}
            type="userVerificationUpload"
        />
    )
}
