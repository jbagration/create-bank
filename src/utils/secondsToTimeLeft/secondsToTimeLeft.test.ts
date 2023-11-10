import { secondsToTimeLeft } from './secondsToTimeLeft'

describe('Convert seconds to time left (mm:ss)', () => {
    it('should format positive number of seconds', () => {
        expect(secondsToTimeLeft(0)).toBe('00:00')
        expect(secondsToTimeLeft(10)).toBe('00:10')
        expect(secondsToTimeLeft(90)).toBe('01:30')
    })

    it('should format negative number of seconds', () => {
        expect(secondsToTimeLeft(-10)).toBe('00:00')
    })
})
