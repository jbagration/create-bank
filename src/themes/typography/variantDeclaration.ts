import React from 'react'

declare module '@mui/material/styles' {
    interface TypographyVariants {
        h1: React.CSSProperties
        h2: React.CSSProperties
        h3: React.CSSProperties
        h4: React.CSSProperties
        h5: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        h1: React.CSSProperties
        h2: React.CSSProperties
        h3: React.CSSProperties
        h4: React.CSSProperties
        h5: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        h1: true
        h2: true
        h3: true
        h4: true
        h5: true
        h6: false
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        buttonLarge: React.CSSProperties
        buttonMedium: React.CSSProperties
        buttonSmall: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        buttonLarge?: React.CSSProperties
        buttonMedium?: React.CSSProperties
        buttonSmall?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        buttonLarge: true
        buttonMedium: true
        buttonSmall: true
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        strong1: React.CSSProperties
        strong2: React.CSSProperties
        strong3: React.CSSProperties
        strong4: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        strong1?: React.CSSProperties
        strong2?: React.CSSProperties
        strong3?: React.CSSProperties
        strong4?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        strong1: true
        strong2: true
        strong3: true
        strong4: true
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        tagEmphasised: React.CSSProperties
        tag: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        tagEmphasised?: React.CSSProperties
        tag?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        tagEmphasised: true
        tag: true
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        textLink1: React.CSSProperties
        textLink2: React.CSSProperties
        textLink3: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        textLink1?: React.CSSProperties
        textLink2?: React.CSSProperties
        textLink3?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        textLink1: true
        textLink2: true
        textLink3: true
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        emphasis: React.CSSProperties
        caption: React.CSSProperties
        menu: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        emphasis?: React.CSSProperties
        caption?: React.CSSProperties
        menu?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        emphasis: true
        caption: true
        menu: true
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        body1: React.CSSProperties
        body2: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        body1?: React.CSSProperties
        body2?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        body1: true
        body2: true
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        subtitle1: React.CSSProperties
        subtitle1Bold: React.CSSProperties
        subtitle2Bold: React.CSSProperties
        subtitle3Bold: React.CSSProperties
        subtitle2: React.CSSProperties
        subtitle3: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        subtitle1?: React.CSSProperties
        subtitle1Bold?: React.CSSProperties
        subtitle2Bold?: React.CSSProperties
        subtitle3Bold?: React.CSSProperties
        subtitle2?: React.CSSProperties
        subtitle3?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        subtitle1: true
        subtitle1Bold: true
        subtitle2Bold: true
        subtitle3Bold: true
        subtitle2: true
        subtitle3: true
    }
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        specificTextBold: React.CSSProperties
        specificText1: React.CSSProperties
    }

    interface TypographyVariantsOptions {
        specificTextBold?: React.CSSProperties
        specificText1?: React.CSSProperties
    }
}

declare module '@mui/material/Typography' {
    export interface TypographyPropsVariantOverrides {
        specificTextBold: true
        specificText1: true
    }
}
