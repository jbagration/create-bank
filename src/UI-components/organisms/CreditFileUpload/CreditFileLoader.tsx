import { ChangeEvent, FC, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks/redux'
import {
    clearDocumentsForLoan,
    deleteDocument,
    setDocumentsForLoan,
} from 'src/redux/slices/creditProductsSlice'
import { Button } from 'src/UI-components/atoms'
import { FormHandler } from 'src/UI-components/molecules/FormHandlers'
import { CreditFileInput } from 'src/UI-components/molecules/UploadFiles/UploadInput/CreditFileInput'
import { UploadTitle } from 'src/UI-components/molecules/UploadFiles/UploadTitle/UploadTitle'
import {
    bothFilesLimitText,
    fileErrorLimitText,
    maxCombinedFileSize,
    maxSingleFileSize,
} from 'src/utils'
import { Box, Typography } from '@mui/material'

import { uploadFilesForLoanFields } from 'src/common/uploadFilesForLoanFields.const'
import { MainMenuPage } from '../MainMenuPageComponent'

import { checkLoanDocumentSize } from './creditFileLoader.utils'

import { acceptButtonText } from '../../molecules/UploadFiles/UploadInput/uploadInput.const'
import { fileInvalidFormat } from 'src/utils/validationRules/validationRules.const'

import {
    errorButtonTextStyles,
    errorTextStyles,
} from 'src/UI-components/molecules/UploadFiles/UploadInput/UploadInput.style'

interface Props {
    onClickAccept: () => void
}

export const CreditFileLoader: FC<Props> = ({ onClickAccept }) => {
    const { passport, incomeStatement } = useAppSelector(
        (state) => state.creditProductForm
    )
    const dispatch = useAppDispatch()
    const methods = useForm({
        mode: 'onChange',
    })

    const handleChangeFile = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const type = e.target.name
            const files = e.target.files as FileList
            const file = files[0]
            dispatch(setDocumentsForLoan({ file, type }))
        },
        [passport, incomeStatement]
    )

    const handleDeleteFile = useCallback((type: string) => {
        dispatch(deleteDocument(type))
    }, [])

    const handleSubmit = useCallback(() => {
        onClickAccept()
    }, [])

    const maxFileCount = 1
    const files = [passport, incomeStatement]
    const loadedFiles = files.filter((file) => file !== null)
    const totalFileSize = loadedFiles.reduce(
        (totalSize, file) => totalSize + (file?.size || 0),
        0
    )

    const singleFileExceedsLimit =
        loadedFiles.length === 1 &&
        (loadedFiles[0]?.size || 0) > maxSingleFileSize
    const combinedFilesExceedLimit =
        loadedFiles.length > 1 && totalFileSize > maxCombinedFileSize

    const reduceCb = checkLoanDocumentSize(
        maxSingleFileSize,
        maxCombinedFileSize,
        maxFileCount
    )
    const docs = [passport, incomeStatement]
    const fileIsLarge = docs.reduce<boolean>(reduceCb, false)
    const isEmpty = !(passport && incomeStatement)

    const isButtonDisabled = () => {
        if (isEmpty) return true
        if (fileIsLarge) return true
        return false
    }

    const allowedFileFormats = ['.jpg', '.jpeg', '.png', '.pdf']
    const isFileFormatValid = (fileName: string | undefined | null) => {
        if (!fileName) {
            return false
        }

        const fileExtension = fileName
            .substring(fileName.lastIndexOf('.'))
            .toLowerCase()
        return allowedFileFormats.includes(fileExtension)
    }

    const inputs = uploadFilesForLoanFields.map((input, id) => {
        const loadedFile = loadedFiles[id]
        const isFileExceedsLimit =
            loadedFile?.size && loadedFile.size > maxSingleFileSize
        const isFormatValid = loadedFile
            ? isFileFormatValid(loadedFile.name)
            : true

        return (
            <div key={`${id}${input.name}`}>
                <CreditFileInput
                    file={loadedFile || null}
                    onChangeFile={handleChangeFile}
                    onDeleteFile={() => {
                        handleDeleteFile(input.name)
                    }}
                    {...input}
                />
                {isFileExceedsLimit && (
                    <Typography sx={errorButtonTextStyles} textAlign="center">
                        {fileErrorLimitText}
                    </Typography>
                )}
                {!isFormatValid && (
                    <Typography sx={errorTextStyles} textAlign="center">
                        {fileInvalidFormat}
                    </Typography>
                )}
            </div>
        )
    })

    useEffect(() => {
        if (!(passport instanceof File) || !(incomeStatement instanceof File)) {
            dispatch(clearDocumentsForLoan())
        }
    }, [])

    return (
        <MainMenuPage text="" backButton>
            <FormHandler methods={methods} onSubmit={handleSubmit}>
                <Box maxWidth="606px" margin="0 auto">
                    <UploadTitle />
                    {inputs}
                    <Button
                        size="long"
                        type="submit"
                        fullWidth
                        disabled={isButtonDisabled()}
                        sx={{ marginTop: '35px' }}
                    >
                        {acceptButtonText}
                    </Button>

                    {(singleFileExceedsLimit || combinedFilesExceedLimit) && (
                        <Typography sx={errorTextStyles} textAlign="center">
                            {loadedFiles.length > 1 && combinedFilesExceedLimit
                                ? bothFilesLimitText
                                : ''}
                        </Typography>
                    )}
                </Box>
            </FormHandler>
        </MainMenuPage>
    )
}
