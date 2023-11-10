import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Radio } from './CustomRadiobutton'

export default {
    title: 'UI-components/atoms/CustomRadiobutton',
    component: Radio,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=633%3A18819&t=p2CzrUBdiyhEvvm0-4',
        },
    },
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = {
    isError: true,
}
