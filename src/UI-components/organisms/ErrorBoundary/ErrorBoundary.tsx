import React from 'react'

import { ErrorNotificator } from '../../molecules/ErrorNotificator'

import { errorImageStyles } from 'src/pages/ErrorPage/ErrorPage.style'

import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundary.type'

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        const { children, title, isButton = false } = this.props

        const handleError = () => {
            this.setState({ hasError: false })
        }

        return this.state.hasError ? (
            <ErrorNotificator
                title="Ошибка"
                text={`В данный момент ведутся технические работы 
                    ${title ? `в ${title}` : ''}
                `}
                sx={{ width: '100%' }}
                imgStyles={errorImageStyles}
                isButton={isButton}
                handleError={handleError}
            />
        ) : (
            children
        )
    }
}
