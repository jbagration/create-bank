import { Box, Typography } from '@mui/material'

export const HeaderElement = ({ text }: { text: string }) => {
    return (
        <Box sx={{ width: '25%' }}>
            <Typography variant="strong1">{text}</Typography>
        </Box>
    )
}
