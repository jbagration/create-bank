import type { SxProps, Theme } from '@mui/material'

import type { TabsStylesProps } from './Tabs.type'

export const tabsStyles: (props: TabsStylesProps) => SxProps<Theme> =
    ({ padding, small = 'false' }) =>
    (theme) => {
        const { subtitle3, strong1 } = theme.typography
        const { TextPrimary } = theme.palette.Text
        const { BackgroundPrimary } = theme.palette.BackAccent

        return {
            '&.MuiTabs-root': {
                ...(small === 'true' && {
                    width: '343px',
                }),
                button: {
                    ...subtitle3,
                    textTransform: 'none',
                    paddingLeft: theme.spacing(3),
                    color: TextPrimary,
                    '&.Mui-selected': {
                        ...strong1,
                    },
                },
                '.MuiTabs-indicator': {
                    background: BackgroundPrimary,
                },
                '.MuiTabs-flexContainer': {
                    ...(padding && {
                        paddingRight: '44px',
                        paddingLeft: '27px',
                    }),
                },
            },
        }
    }
