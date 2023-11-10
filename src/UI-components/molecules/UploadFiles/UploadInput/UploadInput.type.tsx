import { ChangeEventHandler } from 'react'

export type UploadInputProps = {
    labelText: string
    name: string
    isFilesOnServer: boolean
    handleAccessModal: () => void
    onChangeFile: ChangeEventHandler
    onDeleteFile: () => void
    isFileAccess: boolean
    creditFile?: FileList | null
    clickedInputRef: React.MutableRefObject<HTMLInputElement | null>
}
