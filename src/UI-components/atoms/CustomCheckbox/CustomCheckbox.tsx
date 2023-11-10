import { FC } from 'react'
import { Checkbox as MUiCheckbox, CheckboxProps } from '@mui/material'

import {
    BpCheckedIconStyled,
    BpIcon,
    BpIndeterminateIconStyled,
    BpUncheckedIconStyled,
} from './BpIcon'

export const Checkbox: FC<CheckboxProps> = ({ ...props }) => {
    return (
        <MUiCheckbox
            data-testid={`checkbox-${BpIcon}`}
            icon={<BpIcon sx={BpUncheckedIconStyled} />}
            checkedIcon={<BpIcon sx={BpCheckedIconStyled} />}
            indeterminateIcon={<BpIcon sx={BpIndeterminateIconStyled} />}
            {...props}
        />
    )
}
