import { FC } from 'react'
import { ListItem } from '@mui/material'
import { ButtonProps } from '@mui/material/Button'

import { Button } from '../../Button'

type Props = {
    icon: JSX.Element
    text: string
}
export const ActionsItem: FC<Props & ButtonProps> = ({
    icon,
    text,
    ...props
}) => {
    return (
        <ListItem sx={{ width: 'fit-content' }}>
            <Button startIcon={icon} size="medium" {...props}>
                {text}
            </Button>
        </ListItem>
    )
}
