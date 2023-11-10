import { swapAndMakeNumberElements } from './swapAndMakeNumberElements'

describe('Make array from string, swap elements and convert to Number', () => {
    test('should correctly swap elements', () => {
        expect(swapAndMakeNumberElements('1,2')).toEqual([2, 1])
        expect(swapAndMakeNumberElements('0,0')).toEqual([0, 0])
    })

    it('should correctly process inappropriate inputs', () => {
        expect(swapAndMakeNumberElements('')).toEqual([0, 0])
        expect(swapAndMakeNumberElements(',')).toEqual([0, 0])
        expect(swapAndMakeNumberElements('1f,f')).toEqual([0, 0])
    })
})
