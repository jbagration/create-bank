import { ChangeEvent, FC, memo, useCallback, useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { sxType } from 'src/types'
import { isDarkTheme } from 'src/utils/isDarkTheme'
import {
    Box,
    ClickAwayListener,
    Collapse,
    List as MuiList,
    ListItemText,
    MenuItem,
    useTheme,
} from '@mui/material'

import { SelectOptionSuccess } from '../Adornment'
import { Input } from '../Input'

import {
    boxStyles,
    collapseStyles,
    listStyles,
    menuItemStyles,
} from './DropdownMenu.style'

import { DropdownMenuProps } from './DropdownMenu.type'

export const DropdownMenu: FC<sxType & DropdownMenuProps> = memo((props) => {
    const {
        sx,
        label,
        staticLabel = '',
        options,
        placeholder,
        size,
        outlined,
        defaultValue = 'Выберите контрольный вопрос',
        name = 'name',
        autosize,
        height,
        getValue,
        disabled = false,
    } = props

    const { control } = useFormContext()

    const {
        field: { onChange: hookFormOnChange, value },
    } = useController({ control, defaultValue, name })

    const [isOpen, setOpen] = useState(false)
    const [isChosen, setChoice] = useState<null | number>(null)

    const resetOnOpen = useCallback(() => {
        hookFormOnChange('')
        setOpen(true)
    }, [hookFormOnChange])

    const onOpen = useCallback(() => {
        value === 'Выберите контрольный вопрос' ? resetOnOpen() : setOpen(true)
    }, [resetOnOpen, value])

    const onClose = useCallback(() => {
        setOpen(false)
    }, [])

    const toggleDropdown = useCallback(
        () => !disabled && (isOpen ? onClose() : onOpen()),
        [disabled, isOpen, onOpen]
    )

    const ListStyledSx = listStyles({ isOpen, autosize, height })
    const BoxStyledSx = boxStyles({ outlined })

    const onClick = useCallback(
        (text: string, i: number) => {
            setChoice(i)
            hookFormOnChange(text)
            getValue && getValue(text)
        },
        [hookFormOnChange, getValue]
    )

    const MenuItemStyledSx = (text: string, i: number) =>
        menuItemStyles({
            size,
            autosize,
            height,
            isChosen: i === isChosen || value === text,
        })

    const theme = useTheme()
    const isDark = isDarkTheme(theme)

    return (
        <ClickAwayListener onClickAway={onClose}>
            <Box sx={BoxStyledSx} onClick={toggleDropdown}>
                <Input
                    autosize={autosize}
                    sx={sx}
                    data-testid={name}
                    outlined={outlined}
                    {...props}
                    label={value ? label : ''}
                    name={name}
                    staticLabel={staticLabel}
                    type="text"
                    value={value}
                    readOnly
                    placeholder={isOpen ? '' : placeholder}
                    dropdown
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        hookFormOnChange(e.target.value)
                    }}
                    disabled={disabled}
                />

                {!disabled && (
                    <Collapse timeout={200} in={isOpen} sx={collapseStyles}>
                        <MuiList sx={ListStyledSx} disablePadding>
                            {options?.map(({ text, divider }, i) => (
                                <MenuItem
                                    disableRipple
                                    key={text}
                                    value={text}
                                    onClick={() => onClick(text, i)}
                                    divider={divider}
                                    sx={MenuItemStyledSx(text, i)}
                                >
                                    <ListItemText data-testid="select">
                                        {text}
                                    </ListItemText>
                                    {!outlined && <SelectOptionSuccess />}
                                </MenuItem>
                            ))}
                        </MuiList>
                    </Collapse>
                )}
            </Box>
        </ClickAwayListener>
    )
})
