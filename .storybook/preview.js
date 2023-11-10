import { globalDecorators } from './decorators'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
        features: {
            emotionAlias: false,
        },
    },
}

export const decorators = globalDecorators

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            icon: 'circlehollow',items: ['light'],showName: true, dynamicTitle: true,
        },
    },
}
