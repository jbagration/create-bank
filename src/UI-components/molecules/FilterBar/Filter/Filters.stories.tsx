import { ComponentStory } from '@storybook/react'

import { Filters } from '.'

export default {
    title: 'UI-components/molecules/FilterBar/Filters',
    component: Filters,
    argTypes: {},
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1433%3A29266&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof Filters> = (arg) => <Filters {...arg} />

export const extrasIcon = Template.bind({})
extrasIcon.args = {
    title: 'title1',
    icons: 'extras',
}

export const popularIcon = Template.bind({})
popularIcon.args = {
    title: 'title1',
    icons: 'popular',
}

export const workingIcon = Template.bind({})
workingIcon.args = {
    title: 'title1',
    icons: 'working',
}

export const filterBar = Template.bind({})
filterBar.args = {
    title: 'title1',
    icons: 'working',
    variant: 'filterBar',
}

export const certainBankBranch = Template.bind({})
certainBankBranch.args = {
    title: 'title1',
    icons: 'working',
    variant: 'certainBankBranch',
}

certainBankBranch.parameters = {
    design: {
        type: 'figspec',
        url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1451%3A27014&t=jNPqpB5JJdhHPnEP-4',
    },
}
