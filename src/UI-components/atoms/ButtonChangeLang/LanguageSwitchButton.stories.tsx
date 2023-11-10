import { ComponentStory } from '@storybook/react'

import { LanguageSwitchButton } from './LanguageSwitchButton'

export default {
    title: 'UI-components/atoms/ButtonChangeLang',
    component: LanguageSwitchButton,
    argTypes: {
        isActive: {
            type: 'boolean',
            description: 'isActive',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
    },
    args: {
        children: 'En',
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1397%3A25839&t=R5QjJVFlnUFB6QGP-4',
        },
    },
}

const Template: ComponentStory<typeof LanguageSwitchButton> = (args) => (
    <LanguageSwitchButton {...args} />
)

export const Active = Template.bind({})
Active.args = {
    isActive: true,
}
