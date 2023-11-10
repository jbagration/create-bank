import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UploadModal } from 'src/UI-components/molecules/UploadFiles/UploadModal/UploadModal'
import { UploadSuccess } from 'src/UI-components/molecules/UploadFiles/UploadSuccess/UploadSuccess'
import { CreditFileLoader } from 'src/UI-components/organisms/CreditFileUpload/CreditFileLoader'

export const CreditFileUpload = () => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    const handleClickAccept = () => {
        setOpen((prev) => !prev)
    }
    const handleClickSuccess = () => {
        setOpen((prev) => !prev)
        navigate(-1)
    }
    return (
        <>
            <UploadModal isShowModal={isOpen}>
                <UploadSuccess handleSuccess={handleClickSuccess} />
            </UploadModal>
            <CreditFileLoader onClickAccept={handleClickAccept} />
        </>
    )
}
