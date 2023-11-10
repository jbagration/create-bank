import { FC } from 'react'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { IconButton } from '@mui/material'

type SwitchCurrencyProps = {
    clickHandler: () => void
}

export const SwitchCurrency: FC<SwitchCurrencyProps> = ({ clickHandler }) => {
    return (
        <IconButton
            onClick={clickHandler}
            sx={{ width: '60px', height: '60px', alignSelf: 'center' }}
            data-testid="switch-currency"
        >
            <SyncAltIcon sx={{ fontSize: 30, color: 'Text.TextPrimary' }} />
        </IconButton>
    )
}
