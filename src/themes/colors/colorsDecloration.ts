export {}

declare module '@mui/material/styles' {
    export interface PaletteOptions {
        Text: {
            TextPrimary: string
            TextSecondary: string
            TextTertiary: string
            TextQuaternary: string
            TextQuinary: string
            TextSenary: string
            TextDisabled: string
            SemiText: string
        }
        BackAccent: {
            BackgroundPrimary: string
            BackgroundSecondary: string
            BackgroundTertiary: string
            BackgroundQuaternary: string
            BackgroundHover: string
            BackgroundBorder: string
            BackgoundFilter: string
        }
        BackGray: {
            BackgroundPrimary: string
            BackgroundSecondary: string
            BackgroundHover: string
            BackgroundSlider: string
            BackgoundFilter: string
            BackgoundFilterHover: string
            BackgoundDark: string
        }

        BackStandart: {
            BackgroundPrimary: string
            BackgroundSecondary: string
            BackgroundTertiary: string
            BackgroundQuaternary: string
            BackgroundQuinary: string
            BackgroundSenary: string
            BackgroundSeptenary: string
            BackgroundOctonary: string
            BackgroundNonary: string
        }

        SystemColor: {
            Success: string
            Notification: string
            Error: string
            Warning: string
        }

        BackgroundOpacity: {
            backgroundColor: string
        }
    }
}

declare module '@mui/material/styles/createPalette' {
    export interface Palette {
        Text: {
            TextPrimary: string
            TextSecondary: string
            TextTertiary: string
            TextQuaternary: string
            TextQuinary: string
            TextSenary: string
            TextDisabled: string
            SemiText: string
        }
        BackAccent: {
            BackgroundPrimary: string
            BackgroundSecondary: string
            BackgroundTertiary: string
            BackgroundQuaternary: string
            BackgroundHover: string
            BackgroundBorder: string
            BackgoundFilter: string
        }
        BackGray: {
            BackgroundPrimary: string
            BackgroundSecondary: string
            BackgroundHover: string
            BackgroundSlider: string
            BackgoundFilter: string
            BackgoundFilterHover: string
            BackgoundDark: string
        }
        BackStandart: {
            BackgroundPrimary: string
            BackgroundSecondary: string
            BackgroundTertiary: string
            BackgroundQuaternary: string
            BackgroundQuinary: string
            BackgroundSenary: string
            BackgroundSeptenary: string
            BackgroundOctonary: string
            BackgroundNonary: string
        }
        SystemColor: {
            Success: string
            Notification: string
            Error: string
            Warning: string
        }
        BackgroundOpacity: {
            backgroundColor: string
        }
    }
}
