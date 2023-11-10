import { FC, memo } from 'react'
import { Radio as MuiRadio } from '@mui/material'

import {
    bpCheckedIconStyles,
    bpDefaultIconStyles,
    bpErrorIconStyles,
    BpIcon,
} from './BpIcon'

import { RadioButtonProps } from './CustomRadiobutton.type'

export const Radio: FC<RadioButtonProps> = memo(
    ({ isError = false, ...props }) => {
        return (
            <MuiRadio
                icon={
                    <BpIcon
                        sx={isError ? bpErrorIconStyles : bpDefaultIconStyles}
                    />
                }
                checkedIcon={<BpIcon sx={bpCheckedIconStyles} />}
                data-testid={`radio-${+!isError}`}
                {...props}
            />
        )
    }
)
