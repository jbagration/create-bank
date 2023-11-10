import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NoCardCaption } from './NoCardCaption'

export default {
    title: 'UI-components/organisms/MyCards/MyCardsWithText/NoCardCaption',
    component: NoCardCaption,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A62579&t=cF5UNxoDleoCLuEk-4',
        },
    },
} as ComponentMeta<typeof NoCardCaption>

const Template: ComponentStory<typeof NoCardCaption> = () => <NoCardCaption />

export const Default = Template.bind({})
