import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LinkButton } from './LinkButton'

export default {
    title: 'UI-components/atoms/LinkButton',
    component: LinkButton,
    args: {
        link: 'http://localhost:3000/',
    },
} as ComponentMeta<typeof LinkButton>

const Template: ComponentStory<typeof LinkButton> = (args) => (
    <LinkButton {...args} />
)

export const Default = Template.bind({})
