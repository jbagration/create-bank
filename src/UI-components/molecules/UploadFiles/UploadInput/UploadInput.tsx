import { FC, memo, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { UploadButton } from 'src/UI-components/atoms/UploadFiles/UploadFilesButton'
import { Box, Typography } from '@mui/material'

import { errorTextStyles, labelTextStyles } from './UploadInput.style'

import { UploadInputProps } from './UploadInput.type'

const UploadInputComponent: FC<UploadInputProps> = ({
    labelText,
    name,
    isFilesOnServer,
    handleAccessModal,
    onChangeFile,
    onDeleteFile,
    isFileAccess,
    creditFile = null,
    clickedInputRef,
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const {
        register,
        formState: { errors },
    } = useFormContext()

    const { ref, onChange, ...rest } = register(name, {
        onChange: onChangeFile,
    })

    const handleClick = () => {
        if (isFileAccess) {
            inputRef.current?.click()
        } else {
            clickedInputRef.current = inputRef.current
            handleAccessModal()
        }
    }

    let uploadedText = 'Загрузить'
    if (isFilesOnServer) {
        uploadedText = 'Загружено'
    } else if (creditFile && creditFile[0]?.name) {
        uploadedText = creditFile[0].name
    }

    return (
        <>
            <Typography variant="body2" sx={labelTextStyles}>
                {labelText}
            </Typography>
            <Box m="0px 4px 30px">
                <input
                    type="file"
                    disabled={isFilesOnServer}
                    hidden
                    ref={(e) => {
                        ref(e)
                        inputRef.current = e
                    }}
                    onChange={onChange}
                    {...rest}
                    accept="image/png, image/jpeg, application/pdf"
                />
                <UploadButton
                    onDelete={onDeleteFile}
                    uploaded={Boolean(creditFile)}
                    disabled={isFilesOnServer}
                    onClick={handleClick}
                >
                    {uploadedText}
                </UploadButton>
                <Typography sx={errorTextStyles}>
                    {errors[name]?.message}
                </Typography>
            </Box>
        </>
    )
}

export const UploadInput = memo(UploadInputComponent)
