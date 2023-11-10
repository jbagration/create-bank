export interface ErrorBoundaryProps {
    children: JSX.Element
    title?: string
    isButton?: boolean
}

export interface ErrorBoundaryState {
    hasError: boolean
}
