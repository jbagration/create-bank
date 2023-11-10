import { CheckedIcon, DisabledSelectedIcon } from '../../../../assets'

export const BpCheckedIconStyled = {
    width: 24,
    height: 24,
    backgroundImage: `url(${CheckedIcon})`,
    backgroundRepeat: 'no-repeat',

    'input:disabled ~ &': {
        backgroundImage: `url(${DisabledSelectedIcon})`,
        backgroundRepeat: 'no-repeat',
    },
    'text:disabled:checked ~ &': {
        textDecoration: 'underline ',
    },
}
