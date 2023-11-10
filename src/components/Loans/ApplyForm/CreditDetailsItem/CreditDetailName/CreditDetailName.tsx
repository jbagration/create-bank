import { FC } from 'react'
import { Stack, Typography } from '@mui/material'

import { CreditDetailCell } from '../CreditDetailCell'

import { creditRowNumberStyles } from '../CreditDetailsItem.style'

import { CreditDetailNameProps } from './CreditDetailName.type'

export const CreditDetailName: FC<CreditDetailNameProps> = ({
    name,
    text = '',
    position,
}) => {
    return (
        <Stack direction="row">
            <Typography sx={creditRowNumberStyles}>{position}.</Typography>
            <CreditDetailCell title={name} text={text} />
        </Stack>
    )
}
