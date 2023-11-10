import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Copyright } from './Copyright'

export default {
    title: 'UI-components/atoms/Copyright',
    component: Copyright,
    args: {
        variant: 'body1',
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    backgroundColor: '#141212',
                    height: '200px',
                    position: 'relative',
                }}
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Copyright>

const Template: ComponentStory<typeof Copyright> = (args) => (
    <Copyright {...args} />
)

export const Default = Template.bind({})
