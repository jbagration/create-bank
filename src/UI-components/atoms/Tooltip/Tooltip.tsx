import { FC, memo } from 'react'
import {
    Tooltip as MuiTooltip,
    TooltipProps,
    Typography,
    useTheme,
} from '@mui/material'

import { tooltipStyles } from './Tooltip.style'

export const Tooltip: FC<TooltipProps> = memo(
    ({ title, arrow = true, placement = 'top', ...props }) => {
        const theme = useTheme()
        const tooltipStylesTheme = tooltipStyles(theme)

        return (
            <MuiTooltip
                componentsProps={tooltipStylesTheme}
                title={
                    <Typography sx={{ display: 'block' }} variant="caption">
                        {title}
                    </Typography>
                }
                data-testid={`tooltip-${title}`}
                arrow={arrow}
                placement={placement}
                {...props}
            >
                {props.children}
            </MuiTooltip>
        )
    }
)
