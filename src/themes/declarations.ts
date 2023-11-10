export {}

declare module '@mui/material/TextField' {
    interface TextFieldPropsSizeOverrides {
        short: true
        long: true
        medium: false
        small: false
    }
}
declare module '@mui/material/InputBase' {
    export interface InputBaseComponentsPropsOverrides {
        isFocused?: boolean
    }
}
