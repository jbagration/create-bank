import { FC, Fragment } from 'react'
import { Accordion } from 'src/UI-components/atoms'
import { Stack, Typography } from '@mui/material'

import { Question } from './faq.types'

type Props = {
    questions: Question[]
}

export const Questions: FC<Props> = ({ questions }) => {
    const mapCb = getMapCb()
    return (
        <Stack
            sx={{ mt: 7, minWidth: '760px' }}
            spacing={3}
            position="relative"
        >
            {questions.map(mapCb)}
        </Stack>
    )
}

function getMapCb() {
    let category: null | string = null
    let isTitle: boolean = false

    return (el: Question) => {
        const { key, question, answer } = el
        if (el.category !== category) {
            isTitle = true
            category = el.category
        } else {
            isTitle = false
        }
        return (
            <Fragment key={key}>
                {isTitle && <Typography variant="h5">{el.category}</Typography>}
                <Accordion title={question} description={answer} />
            </Fragment>
        )
    }
}
