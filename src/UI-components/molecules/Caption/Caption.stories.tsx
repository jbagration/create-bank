import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Caption } from './Caption'

export default {
    title: 'UI-components/molecules/Caption',
    component: Caption,
    argTypes: {
        component: {
            type: 'boolean',
            description: 'to transfer children',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=15428%3A89911&t=2lL3cIedzJhtzxS9-4',
        },
    },
} as ComponentMeta<typeof Caption>

const Template: ComponentStory<typeof Caption> = (args) => <Caption {...args} />

export const Default = Template.bind({})
Default.args = {
    text: 'Please note, all calls to the contact center are recorded to ensure quality of service',
}

export const WithComponentProp = Template.bind({})
WithComponentProp.args = {
    component: true,
    children: (
        <div style={{ padding: '16px 32px' }}>
            Please note, all calls to the contact center are recorded
        </div>
    ),
}

export const Info = Template.bind({})
Info.args = {
    info: true,
    text: 'The amount of interest income on your deposit will be recalculated at a rate of 0.1% per annum',
}
Info.parameters = {
    design: {
        url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=15254%3A88417&t=cHEOa8gBB9DDnO20-4',
    },
}
