import { storage } from './storage'

describe('Custom localStorage interface', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    afterEach(() => {
        localStorage.clear()
    })

    it('should get data from localStorage', () => {
        localStorage.setItem('key', JSON.stringify('value'))
        expect(storage.get('key')).toBe('value')
    })

    it('should set data to localStorage', () => {
        storage.set('key', 'value')
        expect(localStorage.getItem('key')).toBe(JSON.stringify('value'))
    })

    it('should remove data from localStorage', () => {
        localStorage.setItem('key', JSON.stringify('value'))
        expect(localStorage.getItem('key')).toBe(JSON.stringify('value'))
        storage.remove('key')
        expect(localStorage.getItem('key')).toBeNull()
    })
})
