import { FC, memo } from 'react'
import { TagButton } from 'src/UI-components/atoms'
import { Box } from '@mui/material'

import { tagsBarStyle } from './faq.styles'
import { Tag } from './faq.types'

interface Props {
    tags: Tag[]
    onClick: (tag: string, active: boolean) => void
}

export const TagsBar: FC<Props> = memo(({ tags, onClick }) => {
    return (
        <Box sx={tagsBarStyle}>
            {tags.map((tag) => (
                <TagButton {...tag} onClick={onClick} />
            ))}
        </Box>
    )
})
