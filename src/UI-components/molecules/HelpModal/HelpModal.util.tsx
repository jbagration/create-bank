import { Link } from 'src/UI-components/atoms'

export const withLink = (element: JSX.Element, linkTo?: string) => {
    if (linkTo) {
        return (
            <Link to={linkTo} underline="none">
                {element}
            </Link>
        )
    }
    return element
}
