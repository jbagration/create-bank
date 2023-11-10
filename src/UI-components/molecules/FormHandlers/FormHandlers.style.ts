import type { SxProps } from '@mui/material'

import type { FormHandlerProps } from './FormHandlers.type'

export const formStyles: (props: FormHandlerProps) => SxProps = ({
    gapCount,
    flex = 'false',
}) => {
    return {
        ...(flex === 'true' && {
            display: 'flex',
            flexDirection: 'column',
            gap: gapCount,
        }),

        form: {
            width: '100%',
        },
    }
}
