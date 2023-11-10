import { Theme } from '@mui/material'
import { tooltipClasses } from '@mui/material/Tooltip'

export const tooltipStyles = (theme: Theme) => {
    return {
        tooltip: {
            sx: {
                [`&.${tooltipClasses.tooltip}`]: {
                    padding: '4px 8px',
                    color: theme.palette.Text.TextPrimary,
                    backgroundColor: theme.palette.common.white,
                    borderRadius: 3,
                },
                [`&.${tooltipClasses.arrow}`]: {
                    width: 8,
                    height: 5,
                    color: theme.palette.common.white,
                },
                [`&.${tooltipClasses.tooltipPlacementTop}`]: {
                    [`& .${tooltipClasses.arrow}`]: {
                        marginBottom: '-5px',
                    },
                },
                [`& .${tooltipClasses.tooltipPlacementRight}`]: {
                    [`& .${tooltipClasses.arrow}`]: {
                        marginLeft: '-5px',
                        width: 5,
                        height: 8,
                    },
                },
                [`& .${tooltipClasses.tooltipPlacementBottom}`]: {
                    [`& .${tooltipClasses.arrow}`]: {
                        marginTop: '-5px',
                    },
                },
                [`& .${tooltipClasses.tooltipPlacementLeft}`]: {
                    [`& .${tooltipClasses.arrow}`]: {
                        marginRight: '-5px',
                        width: 5,
                        height: 8,
                    },
                },
            },
        },
    }
}
