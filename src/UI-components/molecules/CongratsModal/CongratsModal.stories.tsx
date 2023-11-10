import { ComponentStory } from '@storybook/react'

import { CongratsModal } from './CongratsModal'

export default {
    title: 'UI-components/molecules/CongratsModal',
    component: CongratsModal,
    argTypes: {
        show: {
            type: 'boolean',
            description: 'CongratsModal show',
            defaultValue: true,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2231%3A62582&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof CongratsModal> = (arg) => (
    <CongratsModal {...arg}>Apply</CongratsModal>
)

export const Showmodal = Template.bind({})
Showmodal.args = {
    title: 'Title',
}
