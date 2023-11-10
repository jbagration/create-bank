import { FC } from 'react'
import { Box } from '@mui/material'

type SeparatorProps = {
    style: React.CSSProperties
    turns: number
}

export const Separator: FC<SeparatorProps> = ({ turns, style }) => {
    return (
        <Box
            sx={{
                position: 'absolute',
                height: '100%',
                transform: `rotate(${turns}turn)`,
            }}
        >
            <Box data-testid="separators-item" style={style} />
        </Box>
    )
}
