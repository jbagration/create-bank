import { Dispatch, SetStateAction } from 'react'

export interface UploadAccessFilesProps {
    handleClose: () => void
    setIsFileAccess: Dispatch<SetStateAction<boolean>>
    clickedInputRef: React.MutableRefObject<HTMLInputElement | null>
}
