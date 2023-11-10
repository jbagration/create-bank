import { NavLink } from 'react-router-dom'
import { Typography, useTheme } from '@mui/material'

export const ScheduleLink = ({ creditId }: { creditId: string }) => {
    const theme = useTheme()
    const color = theme.palette.BackStandart.BackgroundQuaternary
    return (
        <NavLink style={{ color }} to={`${creditId}/schedule`}>
            <Typography sx={{ color: 'inherit' }}>График платежей</Typography>
        </NavLink>
    )
}
