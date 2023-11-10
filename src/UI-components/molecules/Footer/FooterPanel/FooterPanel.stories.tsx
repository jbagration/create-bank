import { ComponentStory } from '@storybook/react'

import { FooterPanel } from './FooterPanel'

export default {
    title: 'UI-components/molecules/Footer/FooterPanel',
    component: FooterPanel,
    argTypes: {},
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1233%3A25440&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof FooterPanel> = (arg) => (
    <FooterPanel {...arg} />
)

export const Default = Template.bind({})
