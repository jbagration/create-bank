import { copyToClipboard } from './copyToСlipboard'

const writeText = jest.fn(async (text) => {})

Object.assign(navigator, {
    clipboard: {
        writeText,
    },
})

describe('Copy text to clipboard', () => {
    it('should call navigator.clipboard.writeText with empty string', async () => {
        const data = await copyToClipboard('')
        expect(data).toBeUndefined()
        expect(writeText).toBeCalledWith('')
        expect(writeText).toHaveReturned()
    })

    it('should call navigator.clipboard.writeText with non-empty string', async () => {
        const data = await copyToClipboard('12051205102')
        expect(data).toBeUndefined()
        expect(writeText).toBeCalledWith('12051205102')
        expect(writeText).toHaveReturned()
    })
})
