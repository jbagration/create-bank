import { ComponentStory } from '@storybook/react'

import { SliderComponent } from './Slider'

export default {
    title: 'UI-components/atoms/Slider',
    component: SliderComponent,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=615%3A7558&t=R5QjJVFlnUFB6QGP-4',
        },
    },
}

const Template: ComponentStory<typeof SliderComponent> = (arg) => (
    <SliderComponent {...arg}>Apply</SliderComponent>
)

export const Default = Template.bind({})
Default.args = {
    name: 'test',
}

export const WithLabel = Template.bind({})
WithLabel.args = {
    name: 'test',
    label: 'Loan amount, USD',
}

export const Start = Template.bind({})
Start.args = {
    name: 'test',
    start: true,
}
