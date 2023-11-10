import { ChangeEvent } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { formatInputValueToDigits } from 'src/utils/formatInputValue'

export const useRangeInput = (
    name: string,
    defaultValue: number | number[]
) => {
    const { control, setValue } = useFormContext()

    const {
        field: { onChange: onChangeSlider, value: sliderSums },
    } = useController({ control, defaultValue, name })

    const {
        field: { onChange: onChangeMaxSum, value: maxSum },
    } = useController({
        control,
        defaultValue: Array.isArray(defaultValue) ? defaultValue[1] : 1000000,
        name: `${name}Max`,
    })

    const {
        field: { onChange: onChangeMinSum, value: minSum },
    } = useController({
        control,
        defaultValue: Array.isArray(defaultValue) ? defaultValue[0] : 0,
        name: `${name}Min`,
    })

    const handleRangeSliderChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = Array.from(e.target.value)
            .map(formatInputValueToDigits)
            .map(Number)

        setValue(`${name}Max`, value[1])
        setValue(`${name}Min`, value[0])

        onChangeSlider(value)
    }

    const handleMaxChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = Number(formatInputValueToDigits(e.target.value))
        const min = +minSum

        if (value < min) {
            setValue(name, [min, min])
            onChangeMaxSum(value)
        } else {
            setValue(name, [min, value])
            onChangeMaxSum(value)
        }
    }

    const handleMinChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const value = Number(formatInputValueToDigits(e.target.value))
        const max = +maxSum

        if (value > max) {
            setValue(name, [max, max])
            onChangeMinSum(value)
        } else {
            setValue(name, [value, max])
            onChangeMinSum(value)
        }
    }

    return {
        sliderSums,
        maxSum,
        minSum,
        handleRangeSliderChange,
        handleMaxChange,
        handleMinChange,
    }
}
