import { ratioToPercent } from './ratioToPercent'

describe('Convert ratio to percent', () => {
    it('should correctly process inappropriate inputs', () => {
        expect(ratioToPercent(0, 10)).toBe(0)
        expect(ratioToPercent(0.25, 0)).toBe(0)
        expect(ratioToPercent(0.25, 10)).toBe(0)
        expect(ratioToPercent(-0.25, 10)).toBe(0)
    })

    it('should convert integers to integers', () => {
        expect(ratioToPercent(1, 0)).toBe(0)
        expect(ratioToPercent(1, 1)).toBe(0)
        expect(ratioToPercent(1.2, 0)).toBe(20)
        expect(ratioToPercent(1.2, 1)).toBe(20)
        expect(ratioToPercent(1.25, 0)).toBe(25)
        expect(ratioToPercent(1.25, 1)).toBe(25)
    })

    it('should leave the correct number of digits after comma', () => {
        expect(ratioToPercent(1.0025, 0)).toBe(0)
        expect(ratioToPercent(1.0025, 1)).toBe(0.2)
        expect(ratioToPercent(1.0025, 2)).toBe(0.25)
        expect(ratioToPercent(1.0025, 3)).toBe(0.25)
    })
})
