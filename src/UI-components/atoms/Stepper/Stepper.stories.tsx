import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Stepper } from './Stepper'

export default {
    title: 'UI-components/atoms/Stepper',
    component: Stepper,
    args: {
        stepperVariant: 'ThreeStepsReg',
        activeStep: 2,
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=964%3A24804&t=R5QjJVFlnUFB6QGP-4',
        },
    },
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = (args) => (
    <Stepper {...args}>Apply</Stepper>
)

export const Default = Template.bind({})
