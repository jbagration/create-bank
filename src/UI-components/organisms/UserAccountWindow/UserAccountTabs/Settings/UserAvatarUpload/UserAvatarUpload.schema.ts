import {
    avatarInvalidFormatText,
    checkFileLimitExceeded,
    checkFileType,
    fileErrorLimitText,
} from 'src/utils'
import * as yup from 'yup'

export const AVATAR_FILE_SIZE = 16 * 1024 * 1024

export const uploadUserAvatarSchema = yup.object().shape({
    avatar: yup
        .mixed()
        .test('fileSize', fileErrorLimitText, checkFileLimitExceeded)
        .test('fileType', avatarInvalidFormatText, checkFileType),
})
