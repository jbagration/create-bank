import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { RadialSeparators } from './RadialSeparators'

describe('RadialSeparators ui', () => {
    it('correct component snapshot', () => {
        render(
            provideTheme(
                <RadialSeparators
                    style={{
                        background: '#fff',
                        width: '5px',
                        height: `${10}%`,
                    }}
                    count={10}
                />
            )
        )
        expect(screen).toMatchSnapshot()
    })
})
