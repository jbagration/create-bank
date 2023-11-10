import { ChangeEvent } from 'react'
import { useController, useFormContext } from 'react-hook-form'

export const useRegularInput = (
    name: string,
    defaultValue: number | number[],
    transformValue?: (value: string | number) => string | number
) => {
    const { control, trigger } = useFormContext()

    const {
        formState: { errors },
        field: { onChange: hookFormOnChange, value: regularValue },
    } = useController({ control, defaultValue, name })

    const validateOnChangeIfErrorOccurred = async () =>
        errors[name] && (await trigger(name))

    const handleRegularSliderChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        hookFormOnChange(
            transformValue ? transformValue(e.target.value) : e.target.value
        )
        validateOnChangeIfErrorOccurred()
    }

    return {
        regularValue,
        handleRegularSliderChange,
    }
}
