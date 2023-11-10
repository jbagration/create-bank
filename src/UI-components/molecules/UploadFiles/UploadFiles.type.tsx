import { AnyObjectSchema } from 'yup'

export interface FileItemType {
    name: string
    labelText: string
}

export type FilesStateType = FileItemType[]

export interface UploadFilesType {
    inputInfo: FilesStateType
    validationShema: AnyObjectSchema
    uploadDocuments?: Function
    isFilesOnServer?: boolean
    type: string
    creditFiles?: (FileList | null)[]
}

export interface HandleOpenArgsType {
    isSuccess: boolean
}
