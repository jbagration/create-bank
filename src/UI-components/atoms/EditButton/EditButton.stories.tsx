import { ComponentMeta, ComponentStory } from '@storybook/react'

import { EditButton } from './EditButton'

export default {
    title: 'UI-components/atoms/EditButton',
    component: EditButton,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1483%3A27591&t=p2CzrUBdiyhEvvm0-4',
        },
    },
} as ComponentMeta<typeof EditButton>

const Template: ComponentStory<typeof EditButton> = (args) => (
    <EditButton {...args} />
)

export const Default = Template.bind({})
