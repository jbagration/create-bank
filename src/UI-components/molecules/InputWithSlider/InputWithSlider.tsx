import { FC } from 'react'
import { SliderCaption, SliderComponent } from 'src/UI-components/atoms'
import { formatInputValueToDigits } from 'src/utils/formatInputValue'
import { Box, Typography } from '@mui/material'

import { InputHandler } from '../FormHandlers'
import { RangeInputs } from '../RangeInputs'

import { useRangeInput } from './hooks/useRangeInput'
import { useRegularInput } from './hooks/useRegularInput'
import type { InputWithSliderProps } from './InputWithSlider.type'

import {
    inputSizeStyles,
    sliderBoxStyles,
    sliderInfoStyles,
} from './InputWithSlider.style'

export const InputWithSlider: FC<InputWithSliderProps> = ({
    name,
    defaultValue,
    type,
    text,
    minValue,
    maxValue,
    label = '',
    readonly = false,
    withRange = false,
    captions = false,
    transformValue,
}) => {
    const {
        sliderSums,
        maxSum,
        minSum,
        handleRangeSliderChange,
        handleMaxChange,
        handleMinChange,
    } = useRangeInput(name, defaultValue)

    const { regularValue, handleRegularSliderChange } = useRegularInput(
        name,
        defaultValue,
        transformValue
    )

    const StyledInputSizeSx = inputSizeStyles({})
    return (
        <Box sx={sliderBoxStyles}>
            {withRange && (
                <RangeInputs
                    type={type}
                    maxName={`${name}Max`}
                    minName={`${name}Min`}
                    handleMaxChange={handleMaxChange}
                    handleMinChange={handleMinChange}
                    maxValue={maxSum}
                    minValue={minSum}
                />
            )}
            <SliderComponent
                start={withRange}
                value={
                    transformValue
                        ? Number(formatInputValueToDigits(regularValue))
                        : sliderSums
                }
                name={name}
                setValue={
                    withRange
                        ? handleRangeSliderChange
                        : handleRegularSliderChange
                }
                min={minValue}
                max={maxValue}
                label={label}
            />
            {captions && (
                <SliderCaption minValue={minValue} maxValue={maxValue} />
            )}

            {!withRange && (
                <>
                    <InputHandler
                        sx={StyledInputSizeSx}
                        required
                        size="long"
                        defaultValue={regularValue}
                        name={name}
                        onChange={handleRegularSliderChange}
                        readOnly={readonly}
                        type={type}
                    />

                    <Typography sx={sliderInfoStyles} variant="textLink2">
                        {text}
                    </Typography>
                </>
            )}
        </Box>
    )
}
