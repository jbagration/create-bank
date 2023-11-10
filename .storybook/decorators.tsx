import React from 'react'

import { theme } from '../src/themes/styleConfig'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { DecoratorFn } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6'
import { withDesign } from 'storybook-addon-designs'

import { initialize, mswDecorator } from 'msw-storybook-addon'

import { Provider } from 'react-redux'
import { rootReducer } from '../src/redux/store'
import { configureStore } from '@reduxjs/toolkit'

initialize()

const withStore: DecoratorFn = (StoryFn, { parameters }) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: parameters.store?.initialState,
    })

    return (
        <Provider store={store}>
            <StoryFn />
        </Provider>
    )
}

const withMuiTheme: DecoratorFn = (StoryFn) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoryFn />
    </ThemeProvider>
)

export const globalDecorators = [
    mswDecorator,
    withMuiTheme,
    withDesign,
    withRouter,
    withStore,
]
