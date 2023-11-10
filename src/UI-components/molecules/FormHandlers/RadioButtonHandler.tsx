import { FC, memo } from 'react'
import * as React from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { Radio } from '../../atoms/CustomRadiobutton'

import type { RadioButtonHandlerProps } from './FormHandlers.type'

export const RadioButtonHandler: FC<RadioButtonHandlerProps> = memo(
    ({ name, defaultValue, onChange, checked, ...props }) => {
        const { control } = useFormContext()

        const {
            fieldState: { error },
            field: { onChange: hookFormOnChange },
        } = useController({ control, defaultValue, name })

        const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            hookFormOnChange(e)
            onChange && onChange(e, e.target.checked)
        }

        return (
            <Radio
                onChange={changeHandler}
                isError={!!error}
                name={name}
                checked={checked}
                {...props}
            />
        )
    }
)
