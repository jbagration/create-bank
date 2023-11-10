import { Provider } from 'react-redux'
import { ComponentStory } from '@storybook/react'

import { store } from '../../../redux/store'

import { Search } from './Search'

export default {
    title: 'UI-components/molecules/Search',
    component: Search,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Search variant',
            defaultValue: 'searchCity',
            options: ['searchBranch', 'searchCity'],
            control: {
                type: 'radio',
            },
        },
    },
    parameters: {
        design: {
            type: 'figspec',
            url: 'https://www.figma.com/file/Z8Y02skRyeUmJLVhym1Fwi/Polybank_web_new?node-id=1433%3A28585&t=jNPqpB5JJdhHPnEP-4',
        },
    },
}

const Template: ComponentStory<typeof Search> = (arg) => (
    <Provider store={store}>
        <Search {...arg} />
    </Provider>
)

export const SearchCity = Template.bind({})
SearchCity.args = {
    variant: 'searchCity',
}
