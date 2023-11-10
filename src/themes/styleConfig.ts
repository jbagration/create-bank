import { createTheme } from '@mui/material/styles'

import RobotoRegular from '../assets/fonts/Roboto-Regular.woff2'
import RobotoBlack from '../assets/fonts/Robotoblack.woff2'
import RobotoBold from '../assets/fonts/Robotobold.woff2'
import RobotoMedium from '../assets/fonts/Robotomedium.woff2'

import {
    blackColor,
    darkGrayColor,
    grayColor,
    systemColor,
    whiteColor,
    yellowColor,
} from './colors/_index'
import { specificTextFont } from './typography/specificText'
import {
    bodyFont,
    buttonFont,
    headlineFont,
    strongFont,
    subtitleFont,
    systemFont,
    tagFont,
    textLinkFont,
} from './typography'

export const Breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    lp: 1440,
    xl: 1920,
}

export const lightTheme = createTheme({
    typography: () => ({
        fontSize: 16,
        lineHeight: '20px',
        fontWeight: 400,
        fontFamily: ['Roboto', 'Montserrat', 'Open Sans'].join(','),
        ...buttonFont,
        ...headlineFont,
        ...subtitleFont,
        ...strongFont,
        ...bodyFont,
        ...tagFont,
        ...textLinkFont,
        ...systemFont,
        ...specificTextFont,
    }),

    components: {
        MuiCssBaseline: {
            styleOverrides: `  @font-face {
          font-family: 'Roboto';
          src: url('${RobotoRegular}') format('woff2');
          font-weight: 400;
          font-style: normal;
        };
         @font-face {
          font-family: 'Roboto';
          src: url('${RobotoMedium}') format('woff2');
          font-weight: 500;
          font-style: normal;
        };
         @font-face {
          font-family: 'Roboto';
          src: url('${RobotoBold}') format('woff2');
          font-weight: 700;
          font-style: normal;
        };
         @font-face {
          font-family: 'Roboto';
          src: url('${RobotoBlack}') format('woff2');
          font-weight: 900;
          font-style: normal;
        };
      ,
`,
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: grayColor['900'],
                    },
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                contained: {},
                outlined: {},
                text: {},
            },
        },
    },

    spacing: 4,
    breakpoints: {
        values: {
            lg: Breakpoints.lg,
            md: Breakpoints.md,
            sm: Breakpoints.sm,
            xl: Breakpoints.xl,
            xs: Breakpoints.xs,
        },
    },

    palette: {
        text: {
            primary: grayColor['900'],
        },
        Text: {
            TextPrimary: grayColor['900'],
            TextSecondary: whiteColor['0'],
            TextTertiary: grayColor['700'],
            TextQuinary: grayColor['700'],
            TextQuaternary: grayColor['900'],
            TextSenary: whiteColor['0'],
            TextDisabled: grayColor['500'],
            SemiText: grayColor['400'],
        },
        BackAccent: {
            BackgroundPrimary: yellowColor['700'],
            BackgroundHover: yellowColor.Hover,
            BackgroundBorder: yellowColor.Border,
            BackgroundSecondary: yellowColor['300'],
            BackgroundTertiary: yellowColor['50'],
            BackgroundQuaternary: yellowColor['300'],
            BackgoundFilter: yellowColor['100'],
        },
        BackGray: {
            BackgroundPrimary: grayColor['300'],
            BackgroundHover: grayColor['400'],
            BackgroundSecondary: grayColor['500'],
            BackgroundSlider: grayColor['200'],
            BackgoundFilter: grayColor['50'],
            BackgoundFilterHover: grayColor['100'],
            BackgoundDark: grayColor['900'],
        },
        BackStandart: {
            BackgroundPrimary: whiteColor[0],
            BackgroundSecondary: whiteColor[0],
            BackgroundTertiary: whiteColor[0],
            BackgroundQuaternary: grayColor['900'],
            BackgroundQuinary: whiteColor[0],
            BackgroundSenary: grayColor['200'],
            BackgroundSeptenary: grayColor['100'],
            BackgroundOctonary: grayColor['100'],
            BackgroundNonary: grayColor['300'],
        },
        SystemColor: {
            Success: systemColor.Success,
            Notification: systemColor.Notification,
            Error: systemColor.Error,
            Warning: systemColor.Warning,
        },
        BackgroundOpacity: {
            backgroundColor: blackColor[0],
        },
    },
})

export const darkTheme = createTheme({
    typography: () => ({
        fontSize: 16,
        lineHeight: '20px',
        fontWeight: 400,
        fontFamily: ['Roboto', 'Montserrat', 'Open Sans'].join(','),
        ...buttonFont,
        ...headlineFont,
        ...subtitleFont,
        ...strongFont,
        ...bodyFont,
        ...tagFont,
        ...textLinkFont,
        ...systemFont,
        ...specificTextFont,
    }),

    components: {
        MuiCssBaseline: {
            styleOverrides: `  @font-face {
          font-family: 'Roboto';
          src: url('${RobotoRegular}') format('woff2');
          font-weight: 400;
          font-style: normal;
        };
         @font-face {
          font-family: 'Roboto';
          src: url('${RobotoMedium}') format('woff2');
          font-weight: 500;
          font-style: normal;
        };
         @font-face {
          font-family: 'Roboto';
          src: url('${RobotoBold}') format('woff2');
          font-weight: 700;
          font-style: normal;
        };
         @font-face {
          font-family: 'Roboto';
          src: url('${RobotoBlack}') format('woff2');
          font-weight: 900;
          font-style: normal;
        };
      ,
    `,
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: grayColor['900'],
                    },
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            },
        },

        MuiButton: {
            styleOverrides: {
                contained: {},
                outlined: {},
                text: {},
            },
        },
    },

    spacing: 4,
    breakpoints: {
        values: {
            lg: Breakpoints.lg,
            md: Breakpoints.md,
            sm: Breakpoints.sm,
            xl: Breakpoints.xl,
            xs: Breakpoints.xs,
        },
    },

    palette: {
        background: {
            default: darkGrayColor[500],
        },
        text: {
            primary: whiteColor[0],
        },
        Text: {
            TextPrimary: whiteColor[0],
            TextSecondary: whiteColor[0],
            TextTertiary: grayColor['500'],
            TextQuaternary: grayColor['900'],
            TextQuinary: grayColor['400'],
            TextSenary: grayColor['900'],
            TextDisabled: grayColor['400'],
            SemiText: whiteColor[0],
        },
        BackAccent: {
            BackgroundPrimary: yellowColor['700'],
            BackgroundHover: yellowColor.Hover,
            BackgroundBorder: yellowColor.Border,
            BackgroundSecondary: yellowColor['300'],
            BackgroundTertiary: darkGrayColor['200'],
            BackgroundQuaternary: darkGrayColor['200'],
            BackgoundFilter: darkGrayColor['100'],
        },
        BackGray: {
            BackgroundPrimary: grayColor['300'],
            BackgroundHover: grayColor['400'],
            BackgroundSecondary: grayColor['500'],
            BackgroundSlider: grayColor['700'],
            BackgoundFilter: darkGrayColor['400'],
            BackgoundFilterHover: grayColor['500'],
            BackgoundDark: grayColor['900'],
        },
        BackStandart: {
            BackgroundPrimary: grayColor['900'],
            BackgroundSecondary: darkGrayColor['300'],
            BackgroundTertiary: darkGrayColor['500'],
            BackgroundQuaternary: whiteColor[0],
            BackgroundQuinary: darkGrayColor['500'],
            BackgroundSenary: darkGrayColor['300'],
            BackgroundSeptenary: darkGrayColor['200'],
            BackgroundOctonary: grayColor['900'],
            BackgroundNonary: darkGrayColor['300'],
        },
        SystemColor: {
            Success: systemColor.Success,
            Notification: systemColor.Notification,
            Error: systemColor.Error,
            Warning: systemColor.Warning,
        },
        BackgroundOpacity: {
            backgroundColor: blackColor[0],
        },
    },
})

declare module '@mui/material/styles' {
    export interface ThemeOptions {
        spacing: number
    }
}
