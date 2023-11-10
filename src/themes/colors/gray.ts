import { grayShades } from './colors.types'

export const grayColor: grayShades = {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    700: '#616161',
    900: '#212529',
}

export const InputStyled = {
    '& .MuiOutlinedInput-root': {
        input: {
            ':focus': {
                '&::placeholder': {
                    color: 'transparent',
                },
            },
        },
    },
}
