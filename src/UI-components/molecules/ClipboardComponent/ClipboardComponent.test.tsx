import { copyToClipboard, provideTheme } from 'src/utils'
import { render, screen } from '@testing-library/react'

import { ClipboardComponent } from './ClipboardComponent'

Object.assign(navigator, {
    clipboard: {
        writeText: () => {},
    },
})

test('Pasting data from the clipboard correctly', () => {
    jest.spyOn(navigator.clipboard, 'writeText')
    copyToClipboard('123')

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('123')
})

test('ClipboardComponent', () => {
    const { rerender } = render(
        provideTheme(<ClipboardComponent title="test" subtitle="testing" />)
    )

    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText('testing')).toBeInTheDocument()
    expect(screen.queryByTestId('copy')).toBeNull()

    rerender(
        provideTheme(
            <ClipboardComponent title="newTest" subtitle="newTesting" copy />
        )
    )
    expect(screen.getByText('newTest')).toBeInTheDocument()
    expect(screen.getByText('newTesting')).toBeInTheDocument()
    expect(screen.getByTestId('copy')).toBeInTheDocument()
})
