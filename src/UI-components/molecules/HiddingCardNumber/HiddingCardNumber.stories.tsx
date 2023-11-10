import { ComponentStory } from '@storybook/react'

import { HiddingCardNumber } from './HiddingCardNumber'

export default {
    title: 'UI-components/molecules/HiddingCardNumber',
    component: HiddingCardNumber,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=14500%3A82946&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof HiddingCardNumber> = (arg) => (
    <HiddingCardNumber {...arg} />
)

export const Hidding = Template.bind({})
Hidding.args = {
    cardNumber: '',
}

export const Default = Template.bind({})
Default.args = {
    cardNumber: '1111222233334444',
    start: false,
}
Default.parameters = {
    design: {
        url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A62346&t=jNPqpB5JJdhHPnEP-4',
    },
}

export const Start = Template.bind({})
Start.args = {
    cardNumber: '1111222233334444',
    start: true,
}
Start.parameters = {
    design: {
        url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=6570%3A62596&t=jNPqpB5JJdhHPnEP-4',
    },
}
