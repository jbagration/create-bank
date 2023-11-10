import { getWorkSchedule } from './getWorkSchedule'

describe('Return a string with the work schedule', () => {
    it('should make a correct string from the passed parameters', () => {
        expect(getWorkSchedule('08:00:00', '20:00:00')).toBe('08:00 - 20:00')
        expect(getWorkSchedule('00:00:00', '23:59:00')).toBe('Круглосуточно')
        expect(getWorkSchedule('00:00:00', '23:59:59')).toBe('Круглосуточно')
    })

    it('should correctly process inappropriate inputs', () => {
        expect(getWorkSchedule()).toBe('Нет данных')
        expect(getWorkSchedule('')).toBe('Нет данных')
        expect(getWorkSchedule('', '')).toBe('Нет данных')
    })
})
