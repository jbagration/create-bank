import { tooltipMocks } from 'src/mocks'
import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { Tooltip } from './Tooltip'

const placement = 'top'
/*eslint-disable*/

const { titleText, childText } = tooltipMocks

describe('Tooltip component', () => {
    it('Renders tooltip when hovering over child', async () => {
        render(
            provideTheme(
                <Tooltip
                    title={titleText}
                    arrow={true}
                    placement={placement}
                    open={true}
                >
                    <span>{childText}</span>
                </Tooltip>
            )
        )
        screen.debug()

        expect(screen.getByText(childText)).toBeInTheDocument()
        expect(screen.getByText(titleText)).toBeInTheDocument()
        expect(screen.getByRole('tooltip')).toHaveAttribute(
            'data-popper-placement',
            placement
        )
    })
})
