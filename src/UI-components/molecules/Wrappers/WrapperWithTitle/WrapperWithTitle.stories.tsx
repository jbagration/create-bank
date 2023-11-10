import { ComponentStory } from '@storybook/react'

import { WrapperWithTitle } from './WrapperWithTitle'

export default {
    title: 'UI-components/molecules/WrapperWithTitle',
    component: WrapperWithTitle,
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=16451%3A92307&t=jFuWPddW8nkJpiWg-4',
        },
    },
}

const Template: ComponentStory<typeof WrapperWithTitle> = (arg) => (
    <WrapperWithTitle {...arg}>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
    </WrapperWithTitle>
)

export const Default = Template.bind({})
Default.args = {
    title: 'Title',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    loanCard: false,
}

export const LoanCard = Template.bind({})
LoanCard.args = {
    title: 'Title',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    loanCard: true,
}
