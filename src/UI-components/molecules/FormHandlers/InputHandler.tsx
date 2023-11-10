import { FC, memo } from 'react'
import { MuiTelInputInfo } from 'mui-tel-input'
import { useController, useFormContext } from 'react-hook-form'

import { Input } from '../../atoms'

import type { InputHandlerProps } from './FormHandlers.type'

import { HandleChangeEvent } from '../../atoms/Input/Input.type'

export const InputHandler: FC<InputHandlerProps> = memo(
    ({
        name,
        helperText,
        defaultValue = '',
        onChange,
        validateOnChangeAfterError = false,
        transformValue,
        transformValueOnBlur,
        onBlur,
        largelabel,
        dropdown,
        onHandleSubmit,
        ...props
    }) => {
        const { control, trigger, setValue } = useFormContext()

        const {
            formState: { errors },
            fieldState: { error },
            field: {
                onChange: hookFormOnChange,
                onBlur: hookFormOnBlur,
                value,
            },
        } = useController({ control, defaultValue, name })

        const validateOnChangeIfErrorOccurred = async () =>
            errors[name] && (await trigger(name))

        const changeHandler = (
            e: HandleChangeEvent,
            info?: MuiTelInputInfo
        ) => {
            let eventValue
            if (typeof e === 'string') {
                eventValue = e
            } else {
                eventValue = e?.target.value
            }

            eventValue = transformValue
                ? transformValue(eventValue)
                : eventValue

            hookFormOnChange(eventValue)

            if (onChange) {
                onChange(e, info)
            }

            if (validateOnChangeAfterError) {
                validateOnChangeIfErrorOccurred()
            }
            return eventValue
        }

        const blurHandler = () => {
            hookFormOnBlur()

            if (onBlur) {
                onBlur()
            }

            if (transformValueOnBlur) {
                const valueTransform = transformValueOnBlur(value).trim()
                setValue(name, valueTransform)
                return valueTransform
            }

            setValue(name, String(value).trim())
        }

        const keyDownHandler = () => {
            if (transformValueOnBlur) {
                setValue(name, transformValueOnBlur(value))
            }
        }

        return (
            <Input
                onHandleSubmit={onHandleSubmit}
                largelabel={largelabel}
                onChange={
                    name === 'periodMonths' || name === 'amount'
                        ? onChange
                        : changeHandler
                }
                value={value}
                helperText={helperText}
                error={!!error}
                errorMessage={error?.message}
                name={name}
                dropdown={dropdown}
                onBlur={blurHandler}
                onKeyDown={keyDownHandler}
                {...props}
            />
        )
    }
)
