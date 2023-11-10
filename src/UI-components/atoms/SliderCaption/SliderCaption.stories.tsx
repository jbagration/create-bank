import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SliderCaption } from './SliderCaption'

export default {
    title: 'UI-components/atoms/SliderCaption',
    component: SliderCaption,
} as ComponentMeta<typeof SliderCaption>

const Template: ComponentStory<typeof SliderCaption> = (arg) => (
    <SliderCaption {...arg} />
)

export const Default = Template.bind({})
Default.args = {
    minValue: 0,
    maxValue: 100,
}
