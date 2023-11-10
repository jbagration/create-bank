import { RadioCheckedIcon, RadioDisabledIcon } from '../../../../assets'

export const bpCheckedIconStyles = {
    width: 24,
    height: 24,
    background: `url(${RadioCheckedIcon}) center no-repeat`,
    'input:disabled ~ &': {
        background: `url(${RadioDisabledIcon}) center no-repeat`,
    },
}
