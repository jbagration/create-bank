import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Tabs } from './Tabs'

export default {
    title: 'UI-components/atoms/Tabs',
    component: Tabs,
    args: {
        labels: ['1', '2'],
        padding: false,
        small: 'false',
        selectedTabIndex: 0,
    },
    argTypes: {
        small: {
            type: 'string',
            description: 'small size tabs',
            defaultValue: 'false',
            options: ['true', 'false'],
            control: {
                type: 'radio',
            },
        },
        padding: {
            type: 'boolean',
            description: 'padding size tabs',
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
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1130%3A22093&t=R5QjJVFlnUFB6QGP-4',
        },
    },
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => (
    <Tabs {...args}>
        <div>Children</div>
    </Tabs>
)

export const Default = Template.bind({})
Default.args = {
    labels: ['name1', 'name2'],
}

export const Small = Template.bind({})
Small.args = {
    small: 'true',
    labels: ['name1', 'name2'],
}

export const WithPadding = Template.bind({})
WithPadding.args = {
    padding: true,
    labels: ['name1', 'name2'],
}
