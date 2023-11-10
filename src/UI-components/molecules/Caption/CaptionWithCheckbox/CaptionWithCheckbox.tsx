import { ChangeEventHandler, FC, memo } from 'react'
import { Checkbox } from 'src/UI-components/atoms'
import { Box, Typography } from '@mui/material'

import { Caption } from '../Caption'

import {
    captionContainerStyles,
    tabCheckboxStyles,
} from './CaptionWithCheckbox.style'

interface Props {
    onChange: ChangeEventHandler
    checked: boolean
    textBeforeLink?: string
    textAfterLink?: string
    linkText?: string
    onClick?: () => void
}

export const CaptionWithCheckbox: FC<Props> = memo(
    ({
        checked,
        onChange,
        textAfterLink,
        textBeforeLink,
        linkText,
        onClick,
    }) => {
        const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (
            event
        ) => {
            event.preventDefault()
            if (onClick) {
                onClick()
            }
        }

        return (
            <Caption component>
                <Box sx={captionContainerStyles}>
                    <Checkbox
                        sx={tabCheckboxStyles}
                        checked={checked}
                        onChange={onChange}
                    />
                    <Typography variant="body1">
                        {textBeforeLink}
                        {linkText && (
                            <a href="#" onClick={handleLinkClick}>
                                {linkText}
                            </a>
                        )}
                        {textAfterLink}
                    </Typography>
                </Box>
            </Caption>
        )
    }
)
