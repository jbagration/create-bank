import { memo } from 'react'

import { Button } from '../Button'

import type { SubmitButtonProps } from './SubmitButton.type'

import { labels } from './SubmitButton.const'

export const SubmitButton = memo(
    ({ label, type, ...props }: SubmitButtonProps) => {
        return (
            <Button type="submit" {...props}>
                {labels[label]}
            </Button>
        )
    }
)
