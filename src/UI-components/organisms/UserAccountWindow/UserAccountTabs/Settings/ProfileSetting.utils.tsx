import { checkFileType } from 'src/utils'

import { AVATAR_FILE_SIZE } from './UserAvatarUpload/UserAvatarUpload.schema'

export const validatePhoto = (files: FileList) => {
    if (!files || !files[0]) return false
    const totalSize = files[0] ? files[0].size : 0
    const isFileExceed16Mb = totalSize > AVATAR_FILE_SIZE
    const isTypeInvalid = files && !checkFileType(files)
    return !isFileExceed16Mb && !isTypeInvalid
}
