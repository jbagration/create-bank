import { FC, memo } from 'react'
import { ErrorComponent } from 'src/UI-components/organisms'

import { text, title } from './WorkInProgressPage.const'

import { errorImageStyles } from './WorkInProgressPage.style'

export const WorkInProgressPage: FC = memo(() => {
    return (
        <ErrorComponent
            title={title}
            text={text}
            sx={{ width: '660px' }}
            imgStyles={errorImageStyles}
            isSideBar={false}
        />
    )
})
