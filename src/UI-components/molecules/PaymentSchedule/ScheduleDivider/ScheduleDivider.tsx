import { darkGrayColor } from 'src/themes/colors/darkGray'
import { Box, styled, Typography } from '@mui/material'

const Divider = styled('hr')({
    flexGrow: 1,
    border: 'none',
    borderTop: `2px solid ${darkGrayColor[100]}`,
    margin: 3,
    color: darkGrayColor[100],
})

export const ScheduleDivider = ({ text }: { text: string }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Divider />
            <Typography variant="strong4">{text}</Typography>
            <Divider />
        </Box>
    )
}
