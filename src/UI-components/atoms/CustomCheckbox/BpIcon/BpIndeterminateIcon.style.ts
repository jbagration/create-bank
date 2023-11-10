import {
    DisabledIndeterminateIcon,
    IndeterminateIcon,
} from '../../../../assets'

export const BpIndeterminateIconStyled = {
    borderRadius: '2px',
    width: 24,
    height: 24,
    backgroundImage: `url(${IndeterminateIcon})`,

    'input:disabled ~ &': {
        backgroundImage: `url(${DisabledIndeterminateIcon})`,
    },
}
