import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = () => {
    const { pathname } = useLocation()
    useLayoutEffect(() => document.documentElement.scrollTo(0, 0), [pathname])
}
