import { FC, Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'src/UI-components/atoms'
import {
    bothFilesLimitText,
    fileErrorLimitText,
    maxCombinedFileSize,
    maxSingleFileSize,
} from 'src/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Typography } from '@mui/material'

import { FormHandler } from '../FormHandlers'
import { ModalActionButton } from '../Modal'

import { UploadAccessFiles } from './UploadAccessFiles/UploadAccessFiles'
import { CreditFileInput } from './UploadInput/CreditFileInput'
import { UploadModal } from './UploadModal/UploadModal'
import { UploadSuccess } from './UploadSuccess/UploadSuccess'
import { UploadTitle } from './UploadTitle/UploadTitle'

import { UserInputInfo } from '../../organisms/UserFileUpload/UserFileUpload.const'
import { acceptButtonText } from './UploadInput/uploadInput.const'

import {
    errorButtonTextStyles,
    errorTextStyles,
} from './UploadInput/UploadInput.style'

import { UploadFilesType } from './UploadFiles.type'

export const UploadFiles: FC<UploadFilesType> = ({
    inputInfo,
    validationShema,
    uploadDocuments,
    type,
    creditFiles = [],
}) => {
    const [isFileAccess, setIsFileAccess] = useState(false)
    const clickedInputRef = useRef<HTMLInputElement>(null)
    const [modal, setModal] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const resolver = yupResolver(validationShema)

    const methods = useForm({
        resolver,
        mode: 'onChange',
    })

    const {
        watch,
        formState: { isValid },
        setValue,
    } = methods

    useEffect(() => {
        if (type === 'creditUpload') {
            const isCreditFilesExist = creditFiles[0] instanceof FileList
            if (isCreditFilesExist) {
                creditFiles.forEach((file, index) => {
                    setValue(inputInfo[index].name, file)
                })
            }
        }
    }, [creditFiles, inputInfo, setValue, type])

    const files = watch(inputInfo.map((item) => item.name))

    const handleAccessModal = () => {
        setModal('accessFilesModal')
    }

    const handleClose = () => {
        setModal('')
    }

    const handleSuccess = () => {
        setModal('')
        if (type === 'userVerificationUpload') {
            navigate(-1)
        }

        if (type === 'creditUpload') {
            const { from } = location.state
            navigate(from, {
                state: { from: 'upload' },
            })
        }
    }

    const onHandleAccept = useCallback(() => {
        const formData = new FormData()

        inputInfo.forEach((info, index) => {
            formData.append(info.name, files[index][0])
        })

        if (type === 'userVerificationUpload' && uploadDocuments) {
            uploadDocuments(formData)
                .unwrap()
                .then(() => {
                    setModal('uploadSuccessModal')
                })
                .catch(() => {
                    setModal('')
                })
        }

        if (type === 'creditUpload') {
            setModal('uploadSuccessModal')
        }
    }, [files, inputInfo, type, uploadDocuments])

    const totalSize = files.reduce(
        (acc, file) => acc + (file && file[0] ? file[0].size : 0),
        0
    )

    const isCombinedFilesExceedLimit = totalSize > maxCombinedFileSize

    const inputIsEmpty = creditFiles.some((el) => el === null)
    const inputs = inputInfo.map((item, index) => {
        const userInput = UserInputInfo.find((info) => info.name === item.name)

        if (!userInput) return null

        const { labelText } = userInput
        const isFileExceedsLimit =
            files[index] &&
            files[index][0] &&
            files[index][0].size > maxSingleFileSize

        return (
            <Fragment key={item.name}>
                <CreditFileInput
                    file={null}
                    label={labelText}
                    name={item.name}
                    onChangeFile={() => {}}
                    onDeleteFile={() => {
                        setValue(item.name, null)
                    }}
                    uploaded={Boolean('')}
                    key={index}
                />
                {(index === 0 || index === 1) && isFileExceedsLimit && (
                    <Typography sx={errorButtonTextStyles} textAlign="center">
                        {fileErrorLimitText}
                    </Typography>
                )}
            </Fragment>
        )
    })

    return (
        <>
            <ModalActionButton modalAction="back" />
            <FormHandler methods={methods} onSubmit={onHandleAccept}>
                <Box maxWidth="606px" margin="0 auto">
                    <UploadTitle />
                    {inputs}
                    <Button
                        size="long"
                        onClick={onHandleAccept}
                        fullWidth
                        disabled={!isValid || inputIsEmpty}
                        sx={{ marginTop: '35px' }}
                    >
                        {acceptButtonText}
                    </Button>
                    {isCombinedFilesExceedLimit && (
                        <Typography sx={errorTextStyles} textAlign="center">
                            {bothFilesLimitText}
                        </Typography>
                    )}
                </Box>
            </FormHandler>

            <UploadModal isShowModal={modal === 'accessFilesModal'}>
                <UploadAccessFiles
                    handleClose={handleClose}
                    setIsFileAccess={setIsFileAccess}
                    clickedInputRef={clickedInputRef}
                />
            </UploadModal>

            <UploadModal isShowModal={modal === 'uploadSuccessModal'}>
                <UploadSuccess handleSuccess={handleSuccess} type={type} />
            </UploadModal>
        </>
    )
}
