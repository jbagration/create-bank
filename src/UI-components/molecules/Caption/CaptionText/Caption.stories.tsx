import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CaptionText } from './CaptionText'

export default {
    title: 'UI-components/molecules/Caption/CaptionText',
    component: CaptionText,
    args: {
        info: true,
        text: 'The amount of interest income on your deposit will be recalculated at a rate of 0.1% per annum',
    },
} as ComponentMeta<typeof CaptionText>

const Template: ComponentStory<typeof CaptionText> = (args) => (
    <CaptionText {...args} />
)

export const Default = Template.bind({})
