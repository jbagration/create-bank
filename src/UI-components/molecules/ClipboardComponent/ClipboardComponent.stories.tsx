import { ComponentStory } from '@storybook/react'

import { ClipboardComponent } from './ClipboardComponent'

export default {
    title: 'UI-components/molecules/ClipboardComponent',
    component: ClipboardComponent,
    argTypes: {
        copy: {
            type: 'boolean',
            description: 'ClipboardComponent copy icon',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
        center: {
            type: 'boolean',
            description: 'text positioned in the center',
            defaultValue: false,
            options: [true, false],
            control: {
                type: 'radio',
            },
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=2281%3A76052&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof ClipboardComponent> = (arg) => (
    <ClipboardComponent {...arg}>Apply</ClipboardComponent>
)

export const WithTitle = Template.bind({})
WithTitle.args = {
    title: 'Title',
}

export const WithTitleAndSubtitle = Template.bind({})
WithTitleAndSubtitle.args = {
    title: 'Title',
    subtitle: 'Subtitle',
}

export const WithCopy = Template.bind({})
WithCopy.args = {
    title: 'Title',
    subtitle: 'Subtitle',
    copy: true,
}

export const Fullwidth = Template.bind({})
Fullwidth.args = {
    title: 'Title',
    subtitle: 'Subtitle',
    fullWidth: true,
}

export const LoanDetails = Template.bind({})
LoanDetails.args = {
    title: 'Title',
    subtitle: 'Subtitle',
    loanDetails: true,
}

export const Center = Template.bind({})
Center.args = {
    title: 'Title',
    subtitle: 'Subtitle',
    center: true,
}

export const TextLarge = Template.bind({})
TextLarge.args = {
    title: 'Title',
    subtitle: 'Subtitle',
    textLarge: true,
}
