import { FC, memo } from 'react'
import { Preloader } from 'src/assets/svg'

import { LoaderProps } from './Loader.types'

export const Loader: FC<LoaderProps> = memo(({ isLoading, size, children }) => {
    return isLoading ? <Preloader width={size} height={size} /> : children
})
