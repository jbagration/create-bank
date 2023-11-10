import { provideTheme } from 'src/utils'
import { RemoveRedEyeOutlined } from '@mui/icons-material'
import { render, screen } from '@testing-library/react'

import { CardStatementItem } from './CardStatementItem'

describe('Card statement item', () => {
    test('it renders the text', () => {
        const props = {
            icon: <RemoveRedEyeOutlined />,
            text: 'Some text from props',
        }

        render(provideTheme(<CardStatementItem {...props} />))

        const textElem = screen.getByText(props.text)
        const icon = screen.getByTestId('RemoveRedEyeOutlinedIcon')

        expect(textElem).toBeInTheDocument()
        expect(icon).toBeInTheDocument()
    })
})
