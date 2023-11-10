import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

export const UserInput = forwardRef((props, inputRef) => {
    const { register } = useFormContext()

    const { ref, onChange, ...rest } = register('avatar')

    return (
        <input
            type="file"
            hidden
            ref={(e) => {
                ref(e)
                if (inputRef !== null && 'current' in inputRef) {
                    inputRef.current = e
                }
            }}
            onChange={(e) => {
                onChange(e)
            }}
            {...rest}
            accept="image/png, image/jpeg"
        />
    )
})
