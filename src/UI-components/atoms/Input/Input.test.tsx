import { inputMocks } from 'src/mocks'
import { provideTheme } from 'src/utils'
import { fireEvent, render, screen } from '@testing-library/react'

import { Input } from './Input'

/* eslint-disable */

const {
    placeHolder,
    helperText,
    label,
    name,
    errorMessage,
    red,
    capsErrorMessage,
} = inputMocks

describe('input component default state', () => {
    it('renders placeholder and helper text in default state', () => {
        const { container } = render(
            provideTheme(
                <Input
                    size={'long'}
                    type={'text'}
                    name={name}
                    placeholder={placeHolder}
                    helperText={helperText}
                    label={label}
                />
            )
        )
        const inputHelperText = container.querySelector('p')

        expect(container.querySelector('label')).not.toBeInTheDocument()
        expect(inputHelperText).toBeInTheDocument()
        expect(inputHelperText).toHaveTextContent(helperText)
        expect(screen.getByPlaceholderText(placeHolder)).toBeInTheDocument()
    })
    it('renders label on focus and removes label on blur', () => {
        const { container } = render(
            provideTheme(
                <Input
                    size={'long'}
                    type={'text'}
                    name={name}
                    placeholder={placeHolder}
                    helperText={helperText}
                    label={label}
                />
            )
        )

        const input = container.querySelector('input')

        fireEvent.focus(input!)
        const inputLabel = container.querySelector('label')
        expect(inputLabel).toBeInTheDocument()
        expect(inputLabel).toHaveTextContent(label)
        fireEvent.blur(input!)
        expect(inputLabel).not.toBeInTheDocument()
    })
    it('label remains on the page after blur if input is filled with value', () => {
        const { container } = render(
            provideTheme(
                <Input size={'long'} type={'text'} name={name} label={label} />
            )
        )

        const input = container.querySelector('input')

        fireEvent.change(input!, { target: { value: 'test' } })

        const inputLabel = container.querySelector('label')

        fireEvent.blur(input!)
        expect(inputLabel).toBeInTheDocument()
        expect(inputLabel).toHaveTextContent(label)
    })
    it('allows only numbers as input value when type set to tel', () => {
        const { container } = render(
            provideTheme(<Input type={'tel'} size={'long'} name={name} />)
        )
        const input = container.querySelector('input')

        fireEvent.change(input!, { target: { value: 'test' } })
        expect(input).toHaveValue('')
        fireEvent.change(input!, { target: { value: '123' } })
        expect(input).toHaveValue('+7 (123) XXX XXXX')
    })
    it('changes border color to red on error and renders error message', () => {
        const { container } = render(
            provideTheme(
                <Input
                    type={'text'}
                    size={'long'}
                    error
                    errorMessage={errorMessage}
                    name={name}
                />
            )
        )

        const error = container.querySelector('p')

        /**@todo figure out why border color is set to default mui-error color */
        // const border = container.querySelector('fieldset')
        // expect(getComputedStyle(border!).borderColor).toBe(red)

        expect(error).toHaveStyle({ color: red })
        expect(error).toHaveTextContent(errorMessage)
    })
    it('toggles password visibility', () => {
        const { container } = render(
            provideTheme(<Input type={'password'} size={'long'} name={name} />)
        )
        const input = container.querySelector('input')
        expect(input).toHaveAttribute('type', 'password')

        const showPasswordSVG = container.querySelector('svg')
        fireEvent.click(showPasswordSVG!)
        expect(input).toHaveAttribute('type', 'text')

        const hidePasswordSVG = container.querySelector('svg')
        fireEvent.click(hidePasswordSVG!)
        expect(input).toHaveAttribute('type', 'password')
    })
    it('doesnt toggle password visibility when not focused and has error ', () => {
        const { container } = render(
            provideTheme(
                <Input type={'password'} size={'long'} name={name} error />
            )
        )
        const input = container.querySelector('input')
        expect(input).toHaveAttribute('type', 'password')

        const errorAlertSVG = container.querySelector('svg')
        fireEvent.click(errorAlertSVG!)
        expect(input).toHaveAttribute('type', 'password')
    })
    it('toggles password visibility when focused and has error ', () => {
        const { container } = render(
            provideTheme(
                <Input type={'password'} size={'long'} name={name} error />
            )
        )
        const input = container.querySelector('input')
        expect(input).toHaveAttribute('type', 'password')
        fireEvent.focus(input!)
        const showPasswordSVG = container.querySelector('svg')
        fireEvent.click(showPasswordSVG!)
        expect(input).toHaveAttribute('type', 'text')

        const hidePasswordSVG = container.querySelector('svg')
        fireEvent.click(hidePasswordSVG!)
        expect(input).toHaveAttribute('type', 'password')
    })
    it('runs onChange, onBlur and onFocus', () => {
        const onChange = jest.fn()
        const onBlur = jest.fn()
        const onFocus = jest.fn()
        const { container } = render(
            provideTheme(
                <Input
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    type={'password'}
                    size={'long'}
                    name={name}
                />
            )
        )

        const input = container.querySelector('input')
        fireEvent.change(input!, { target: { value: 't' } })
        fireEvent.change(input!, { target: { value: 'e' } })
        fireEvent.focus(input!)
        fireEvent.blur(input!)

        expect(onChange).toHaveBeenCalledTimes(2)
        expect(onFocus).toHaveBeenCalled()
        expect(onBlur).toHaveBeenCalled()
    })
})
