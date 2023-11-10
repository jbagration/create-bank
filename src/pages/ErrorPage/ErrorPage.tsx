import { FC, memo } from 'react'
import { ErrorComponent } from 'src/UI-components/organisms'

import { text, title } from './ErrorPage.const'

import { errorImageStyles } from './ErrorPage.style'

import { ErrorPageProps } from './ErrorPage.type'

export const ErrorPage: FC<ErrorPageProps> = memo(({ isSideBar }) => {
    return (
        <ErrorComponent
            title={title}
            text={text}
            sx={{ width: '343px' }}
            imgStyles={errorImageStyles}
            isSideBar={isSideBar}
        />
    )
})
