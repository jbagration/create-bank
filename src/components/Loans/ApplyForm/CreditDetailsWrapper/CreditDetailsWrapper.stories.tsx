import { ComponentStory } from '@storybook/react'

import { CreditDetailsWrapper } from './CreditDetailsWrapper'

export default {
    title: 'UI-components/molecules/CreditDetailsWrapper',
    component: CreditDetailsWrapper,
    argTypes: {},
}

const Template: ComponentStory<typeof CreditDetailsWrapper> = (arg) => (
    <CreditDetailsWrapper {...arg}>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            officia.
        </p>
    </CreditDetailsWrapper>
)

export const Default = Template.bind({})
Default.args = {
    padding: '40px',
}

export const PaddingSmall = Template.bind({})
PaddingSmall.args = {
    paddingSmall: true,
}

export const Center = Template.bind({})
Center.args = {
    textCenter: true,
}
