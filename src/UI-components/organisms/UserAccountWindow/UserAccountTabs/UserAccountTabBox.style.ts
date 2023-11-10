import { SxProps, Theme } from '@mui/material'

import { TabBoxStylesProps } from './UserAccountTabBox.type'

export const tabColumnStyles = (theme: Theme) => {
    return {
        width: '343px',
        '& .css-19idom:not(first-of-type)': {
            marginTop: 6,
        },
        color: theme.palette.Text.TextPrimary,
    }
}

export const userAccountTabBox: (props: TabBoxStylesProps) => SxProps = ({
    labelPadding,
    type,
}) => {
    return {
        display: 'flex',
        marginTop: '56px',
        ...(labelPadding && { marginTop: '40px' }),
        ...(type === 'notifications' && { flexDirection: 'column' }),
        '& > div': {
            marginRight: '-10px',
            flex: '1',
        },
    }
}
