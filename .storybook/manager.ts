import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'
import logo from '../src/UI-components/molecules/Header/CreateBank.svg'

const theme = create({
    base: 'light',

    colorSecondary: '#FFD600',

    appBg: '#F5F5F5',
    appContentBg: '#FFFFFF',
    appBorderColor: 'rgba(0,0,0,.1)',
    appBorderRadius: 8,

    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace',

    textColor: '#212529',
    textInverseColor: '#FFFFFF',
    textMutedColor: '#9E9E9E',

    barTextColor: '#212529',
    barSelectedColor: '#FFD600',
    barBg: '#FFFFFF',

    inputBg: '#FFFFFF',
    inputBorder: 'rgba(0,0,0,.3)',
    inputTextColor: '#212529',
    inputBorderRadius: 4,

    brandTitle: 'CreateBank',
    brandUrl: 'https://a-finny-astondevs.tk/login',
    brandImage: logo,
})

addons.setConfig({
    theme,
    showPanel: true,
    panelPosition: 'right',
})
