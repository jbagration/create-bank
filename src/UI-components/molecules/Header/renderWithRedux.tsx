import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import {
    configureStore,
    EmptyObject,
    EnhancedStore,
    PreloadedState,
} from '@reduxjs/toolkit'
import { render, RenderOptions } from '@testing-library/react'

import { authReducer } from '../../../redux/slices/auth'
import type { RootState } from '../../../redux/store'

type ReducerTypes = Pick<RootState, 'auth'>
type TStore = EnhancedStore<ReducerTypes>

type CustomRenderOptions = {
    preloadedState?: PreloadedState<ReducerTypes & EmptyObject>
    store?: TStore
} & Omit<RenderOptions, 'wrapper'>

function renderwithRedux(ui: ReactElement, options?: CustomRenderOptions) {
    const { preloadedState } = options || {}

    const store =
        options?.store ||
        configureStore({
            reducer: {
                auth: authReducer,
            },
            preloadedState,
        })

    function Wrapper({ children }: { children: React.ReactNode }) {
        return <Provider store={store}>{children}</Provider>
    }

    return render(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'
export { renderwithRedux }
