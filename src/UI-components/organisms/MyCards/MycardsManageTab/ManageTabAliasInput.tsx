import React, { ChangeEvent, FC, useState } from 'react'
import { Done, Pencil } from 'src/assets'
import { useChangeCardAliasMutation } from 'src/redux/api/cardsApi'
import { ButtonWithIcon, Input } from 'src/UI-components/atoms'
import { Box, Typography } from '@mui/material'

import { aliasLabel } from './ManageTab.const'

import { inputContainerStyles, inputLabelStyles } from './ManageTab.style'

interface ManageTabAliasInputProps {
    cardNumber: string
    isDisabled: boolean
    setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
    initialAlias: string
}

export const ManageTabAliasInput: FC<ManageTabAliasInputProps> = ({
    cardNumber,
    isDisabled,
    setIsDisabled,
    initialAlias,
}) => {
    const [changeAlias] = useChangeCardAliasMutation()

    const [alias, setAlias] = useState(initialAlias)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAlias(e.target.value)
    }

    const onClick = () => {
        if (isDisabled) {
            setIsDisabled(false)
            return
        }

        setIsDisabled(true)
        if (alias !== initialAlias) {
            changeAlias({ cardNumber, cardAlias: alias })
        }
    }

    return (
        <Box sx={inputContainerStyles}>
            <Typography sx={inputLabelStyles}>{aliasLabel}</Typography>

            <Input
                size="long"
                type="text"
                name="cardAlias"
                value={alias}
                onChange={onChange}
                disabled={isDisabled}
                withoutHelperText
                maxLength={30}
            />
            <ButtonWithIcon
                onClick={onClick}
                yellow
                radius={false}
                size="small"
            >
                {isDisabled ? <Pencil /> : <Done width="24px" height="24px" />}
            </ButtonWithIcon>
        </Box>
    )
}
