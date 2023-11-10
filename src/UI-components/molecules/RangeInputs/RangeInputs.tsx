import { FC } from 'react'
import { Box } from '@mui/material'

import { StyledInputSize } from '../InputWithSlider/InputWithSlider.style'
import {
    rangeInputsBoxStyles,
    rangeInputsDashStyled,
} from './RangeInputs.style'

import { RangeInputsProps } from './RangeInputs.type'

export const RangeInputs: FC<RangeInputsProps> = ({
    maxValue,
    minValue,
    maxName,
    minName,
    handleMaxChange,
    handleMinChange,
    type,
}) => {
    const rangeInputsDashStyledSx = rangeInputsDashStyled()

    return (
        <Box sx={rangeInputsBoxStyles}>
            <Box width="117px">
                <StyledInputSize
                    largelabel="true"
                    staticLabel="От (руб.)"
                    start="true"
                    size="long"
                    defaultValue={minValue}
                    name={minName}
                    onChange={handleMinChange}
                    type={type}
                    autosize="true"
                />
            </Box>

            <Box sx={rangeInputsDashStyledSx} />

            <Box width="117px">
                <StyledInputSize
                    largelabel="true"
                    staticLabel="До (руб.)"
                    start="true"
                    size="long"
                    defaultValue={maxValue}
                    name={maxName}
                    onChange={handleMaxChange}
                    type={type}
                    autosize="true"
                />
            </Box>
        </Box>
    )
}
