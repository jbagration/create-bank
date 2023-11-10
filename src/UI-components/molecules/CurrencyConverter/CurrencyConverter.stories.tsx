import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CurrencyConverter } from './CurrencyConverter'

export default {
    title: 'UI-components/molecules/CurrencyConverter',
    component: CurrencyConverter,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A26391&t=f4KEIoEDHqqoKqf6-4',
        },
    },
} as ComponentMeta<typeof CurrencyConverter>

const Template: ComponentStory<typeof CurrencyConverter> = () => {
    return <CurrencyConverter />
}

export const Default = Template.bind({})
