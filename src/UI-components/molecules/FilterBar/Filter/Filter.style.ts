import type { SxProps, Theme } from '@mui/material'

import type { filterContainerProps } from './Filter.type'

export const filterContainer: (props: filterContainerProps) => SxProps = ({
    variant,
}) => {
    return {
        ...(variant === 'certainBankBranch' && {
            marginTop: '16px',
            marginBottom: '16px',
        }),
        marginTop: '32px',
    }
}

export const filterIconContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '5px',
}

export const filterTitleStyles = (theme: Theme) => {
    return {
        color: theme.palette.Text.TextDisabled,
    }
}
