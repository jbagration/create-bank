import React, { ChangeEventHandler, FC, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { UploadButton } from 'src/UI-components/atoms/UploadFiles/UploadFilesButton'
import { Box, Typography } from '@mui/material'

import { labelTextStyles } from './UploadInput.style'

interface Props {
    uploaded?: boolean
    name: string
    label: string
    file: File | null
    onChangeFile: ChangeEventHandler
    onDeleteFile: (type: string) => void
}

export const CreditFileInput: FC<Props> = ({
    label,
    name,
    file,
    onChangeFile,
    onDeleteFile,
}) => {
    const [isUpload, setIsUpload] = useState(!!file?.name)
    const [uploadedFileName, setUploadedFileName] = useState<string>(
        file?.name || ''
    )

    const inputRef = useRef<HTMLInputElement | null>(null)
    const { register } = useFormContext()
    const { onChange, ref, ...rest } = register(name, {
        onChange: (e) => {
            setIsUpload(true)
            onChangeFile(e)
            setUploadedFileName(e.target.files?.[0]?.name || '')
        },
    })

    const fileName = isUpload ? uploadedFileName || 'Загрузить' : 'Загрузить'

    const handleClick = () => {
        inputRef.current?.click()
    }

    const handleDeleteFile = () => {
        setIsUpload(false)
        onDeleteFile(name)
        setUploadedFileName('')
        if (inputRef.current !== null) {
            inputRef.current.value = ''
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            setIsUpload(false)
            setUploadedFileName('')
        }
    }

    return (
        <Box m="0px 4px 30px">
            <Typography variant="body2" sx={labelTextStyles}>
                {label}
            </Typography>
            <input
                type="file"
                disabled={isUpload}
                hidden
                ref={(e) => {
                    ref(e)
                    inputRef.current = e
                }}
                onChange={(e) => {
                    onChange(e)
                    handleInputChange(e)
                }}
                {...rest}
                accept="image/png, image/jpeg, application/pdf"
            />
            <UploadButton
                uploaded={isUpload}
                disabled={isUpload}
                onClick={handleClick}
                onDelete={handleDeleteFile}
            >
                {fileName}
            </UploadButton>
        </Box>
    )
}
