import { grayColor } from 'src/themes/colors/gray'
import { Theme } from '@mui/material'

export const isDarkTheme = (theme: Theme) => {
    return theme.palette.BackStandart.BackgroundSecondary === grayColor[900]
}
