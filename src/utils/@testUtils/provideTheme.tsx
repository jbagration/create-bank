import { ReactElement } from 'react'
import { lightTheme } from 'src/themes/styleConfig'
import { ThemeProvider } from '@mui/material'

export const provideTheme = (ui: ReactElement) => (
    <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
)
