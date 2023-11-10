import { FC, memo, SyntheticEvent, useRef, useState } from 'react'
import { MuiTelInput, MuiTelInputInfo } from 'mui-tel-input'
import { ErrorAlert, VisibilityOff, VisibilityOn } from 'src/assets/svg'
import { Nullable } from 'src/types'
import {
    Box,
    Icon,
    InputAdornment,
    SxProps,
    TextField,
    Theme,
} from '@mui/material'

import { SelectArrowDown } from '../Adornment'
import { Counter } from '../Counter'
import { FormHelperText } from '../FormHelperText'
import { InputLabel } from '../InputLabel'

import { phoneInputMask, smsInputMask } from './Input.utils'

import {
    boxUnderInputStyles,
    iconVisibilityOffStyles,
    iconVisibilityOnStyles,
    InputStyled,
    inputTelMenustyles,
    InputWrapperStyled,
} from './Input.style'

import {
    EventKeyboard,
    EventMouse,
    HandleChangeEvent,
    HandleFocusEvent,
    InputProps,
    ModifierStateKeys,
    Type,
} from './Input.type'

export const Input: FC<InputProps> = memo((props) => {
    const {
        label,
        type,
        errorMessage,
        helperText,
        onChange,
        error,
        disabled,
        size,
        placeholder,
        name,
        value,
        staticLabel,
        autoFocus,
        maxLength,
        onBlur,
        onKeyDown,
        onFocus,
        gridColumn,
        readOnly,
        dropdown,
        multiline,
        defaultValue,
        sx,
        outlined,
        autosize,
        smallHeight,
        largelabel,
        onHandleSubmit,
        outFocusLabel,
        isCounter,
        info,
        countLimit = 0,
        children,
        select = false,
        startAdornment,
        customMenuPosition = false,
        withoutHelperText = false,
    } = props

    const [count, setCount] = useState(0)
    const [showPassword, setShowPassword] = useState(false)
    const [isEmptyInput, setIsEmptyInput] = useState(true)
    const [isFocused, setIsFocused] = useState(false)
    const [modifierState, setModifierState] =
        useState<Nullable<ModifierStateKeys>>(null)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (
        e: HandleChangeEvent,
        inputInfo?: MuiTelInputInfo
    ) => {
        if (onChange) {
            onChange(e, inputInfo)
        }
        if (isCounter && typeof e !== 'string') {
            const countInput = onChange ? onChange(e) : e.target.value
            setCount(countInput.length)
        }
        if (typeof e !== 'string') {
            const isValueHasLength = e.target.value.length
            setIsEmptyInput(!isValueHasLength)
        } else {
            setIsEmptyInput(!e.length)
        }
    }

    const handleMouseDown = (e: SyntheticEvent) => {
        e.preventDefault()
    }

    const handleMouseUp = (e: SyntheticEvent) => {
        e.preventDefault()
    }

    const handlePasswordVisibility = () => {
        if (disabled) {
            return
        }

        setShowPassword((p) => !p)
    }

    const handleFocus = (e: HandleFocusEvent) => {
        e.preventDefault()

        if (onFocus) {
            onFocus()
        }
        setIsFocused(true)
    }

    const handleBlur = (e: HandleFocusEvent) => {
        const valueBlur = onBlur ? onBlur(e) : e.target.value

        if (isCounter) {
            if (valueBlur.length === 0) {
                setIsFocused(false)
            }
            return setCount(valueBlur.length)
        }
        return setIsFocused(false)
    }

    const checkForModifierState = (
        e: EventMouse | EventKeyboard,
        keyName: ModifierStateKeys
    ) => {
        if (type !== 'password' && type !== 'text') {
            return
        }

        if (isFocused) {
            if (e.getModifierState(keyName)) {
                setModifierState(keyName)
            } else {
                setModifierState(null)
            }
        }
    }

    const keyDownHandler = (e: EventKeyboard) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            if (
                onHandleSubmit &&
                (e.target as HTMLElement).tagName === 'TEXTAREA'
            ) {
                e.preventDefault()
                onHandleSubmit()
            }

            if (onKeyDown) {
                onKeyDown()
            }

            setIsFocused(false)
        }
        checkForModifierState(e, 'CapsLock')
    }

    const getHelperText = () => {
        if (modifierState) return `Включен ${modifierState}`
        if (error && !disabled) return errorMessage
        return helperText
    }

    const visibilityButton =
        type === 'password' ? (
            <Box onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                {showPassword ? (
                    <Icon sx={iconVisibilityOnStyles}>
                        <VisibilityOn onClick={handlePasswordVisibility} />
                    </Icon>
                ) : (
                    <Icon sx={iconVisibilityOffStyles}>
                        <VisibilityOff onClick={handlePasswordVisibility} />
                    </Icon>
                )}
            </Box>
        ) : null

    const actualValue = defaultValue || value

    const isDefault = dropdown
        ? (!isFocused && isEmptyInput && !actualValue) ||
          placeholder === actualValue
        : !isFocused && isEmptyInput && !actualValue

    const isOutFocusLabel = !isFocused && outFocusLabel

    const isFocusTextField = isCounter && isFocused && countLimit >= count

    const isLabel = label && !isDefault && !isOutFocusLabel

    let actualType: Type
    if (type === 'password') {
        actualType = showPassword ? 'text' : 'password'
    } else {
        actualType = type
    }

    const actualError = !!modifierState || error
    const iconError = actualError && !disabled

    const getEndAdornment = () => {
        switch (true) {
            case disabled || withoutHelperText:
                return null
            case dropdown:
                return <SelectArrowDown />
            case type === 'password':
                return iconError && !isFocused ? (
                    <ErrorAlert />
                ) : (
                    visibilityButton
                )
            case type === 'smsCode':
                return iconError && !isFocused && <ErrorAlert />
            case iconError:
                return <ErrorAlert />
            default:
                return null
        }
    }

    const getStartAdornment = () => {
        if (startAdornment)
            return (
                <InputAdornment position="start">
                    {startAdornment}
                </InputAdornment>
            )

        return null
    }

    const InputStyledSx = InputStyled({
        size,
        isEmptyInput,
        type: actualType,
        dropdown,
        multiline,
        initialType: type,
        outlined,
        autosize,
        smallHeight,
        gridColumn,
        select,
        customMenuPosition,
    })

    const InputStyledSxArray = [InputStyledSx, sx] as SxProps<Theme>

    const inputWrapperStylesSx = InputWrapperStyled({ gridColumn, type })

    return (
        <>
            {staticLabel && (
                <Box sx={inputWrapperStylesSx}>
                    <InputLabel largelabel={largelabel}>
                        {staticLabel}
                    </InputLabel>
                </Box>
            )}

            {isOutFocusLabel && (
                <Box sx={inputWrapperStylesSx}>
                    <InputLabel largelabel={largelabel} type={type}>
                        {String(value).length !== 6 && outFocusLabel}
                    </InputLabel>
                </Box>
            )}

            {type === 'tel' ? (
                <Box sx={inputWrapperStylesSx}>
                    <MuiTelInput
                        forceCallingCode
                        sx={InputStyledSxArray}
                        value={`${value}`}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onKeyPress={keyDownHandler}
                        focused={isFocused}
                        disabled={disabled}
                        autoFocus={autoFocus}
                        defaultCountry={'RU' || info?.countryCode}
                        onlyCountries={['RU', 'BY']}
                        data-testid={`${type}-${placeholder}`}
                        placeholder={placeholder}
                        langOfCountryName="ru"
                        error={actualError}
                        MenuProps={{
                            disableScrollLock: true,
                            sx: inputTelMenustyles,
                        }}
                        InputProps={{
                            readOnly,
                            endAdornment: getEndAdornment(),
                            ...phoneInputMask(isFocused),
                        }}
                        id={String(info?.countryCallingCode)}
                        variant="outlined"
                        label={isLabel && isFocused ? label : null}
                    />
                </Box>
            ) : (
                <TextField
                    sx={InputStyledSxArray}
                    multiline={multiline}
                    value={value}
                    onChange={handleChange}
                    onClick={(e) => {
                        checkForModifierState(e, 'CapsLock')
                    }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={keyDownHandler}
                    focused={isFocused}
                    disabled={disabled}
                    error={!withoutHelperText && actualError}
                    InputProps={{
                        readOnly,
                        endAdornment: getEndAdornment(),
                        startAdornment: getStartAdornment(),
                        ...(type === 'smsCode' && smsInputMask(isFocused)),
                        inputProps: {
                            maxLength,
                        },
                    }}
                    SelectProps={{
                        MenuProps: {
                            disablePortal: customMenuPosition,
                            disableScrollLock: true,
                        },
                    }}
                    inputRef={inputRef}
                    placeholder={placeholder}
                    name={name}
                    autoComplete="on"
                    autoFocus={autoFocus}
                    defaultValue={defaultValue}
                    data-testid={`${type}-${placeholder}`}
                    type={actualType}
                    size={size}
                    select={select}
                    label={!isOutFocusLabel && isLabel ? label : null}
                >
                    {children}
                </TextField>
            )}
            {!withoutHelperText && (
                <Box sx={boxUnderInputStyles}>
                    {(actualError || helperText) && (
                        <FormHelperText
                            gridColumn={gridColumn}
                            disabled={disabled}
                            error={actualError}
                        >
                            {getHelperText()}
                        </FormHelperText>
                    )}
                    {isFocusTextField && (
                        <Counter
                            countLimit={countLimit}
                            count={count}
                            testId={`${type}-${placeholder}-counter`}
                        />
                    )}
                </Box>
            )}
        </>
    )
})
