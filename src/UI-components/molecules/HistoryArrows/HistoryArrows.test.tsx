import { provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { HistoryArrows } from './HistoryArrows'

describe('History arrows pagination ui', () => {
    it('correct props display', () => {
        render(
            provideTheme(
                <HistoryArrows
                    dataLength={0}
                    count={1}
                    changePrev={() => {}}
                    changeNext={() => {}}
                    size={3}
                />
            )
        )

        expect(screen.getByTestId('arrow-next')).toBeInTheDocument()
        expect(screen.getByTestId('arrow-prew')).toBeInTheDocument()
    })

    it('disabled arrow if data length < 3', () => {
        render(
            provideTheme(
                <HistoryArrows
                    count={1}
                    changePrev={() => {}}
                    changeNext={() => {}}
                    dataLength={2}
                    size={3}
                />
            )
        )

        expect(screen.getByTestId('arrow-next')).toHaveProperty(
            'disabled',
            true
        )
    })

    it('disabled arrow if data error', () => {
        render(
            provideTheme(
                <HistoryArrows
                    count={1}
                    changePrev={() => {}}
                    changeNext={() => {}}
                    dataLength={3}
                    error={{}}
                    size={3}
                />
            )
        )

        expect(screen.getByTestId('arrow-next')).toHaveProperty(
            'disabled',
            true
        )
    })

    it('disabled next arrow', () => {
        render(
            provideTheme(
                <HistoryArrows
                    count={1}
                    changePrev={() => {}}
                    changeNext={() => {}}
                    dataLength={3}
                    next={false}
                    size={3}
                />
            )
        )

        expect(screen.queryByTestId('arrow-next')).not.toBeInTheDocument()
    })
})
