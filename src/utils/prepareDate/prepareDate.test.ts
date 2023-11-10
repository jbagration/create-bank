import startOfToday from 'date-fns/startOfToday'
import startOfYesterday from 'date-fns/startOfYesterday'

import { prepareDate } from './prepareDate'

const testDates = {
    valid: {
        input: '2020-01-01T00:00:00',
        output: { resultDate: '01.01.2020', time: '00:00' },
    },
    invalid: {
        input: '',
        output: { resultDate: '01.01.1970', time: '03:00' },
    },
    today: {
        input: startOfToday().toISOString(),
        output: { resultDate: 'Сегодня', time: '00:00' },
    },
    yesterday: {
        input: startOfYesterday().toISOString(),
        output: { resultDate: 'Вчера', time: '00:00' },
    },
}

describe('Prepare lines of date info passed for displaying', () => {
    it('should correctly process inappropriate inputs', () => {
        const { input, output } = testDates.invalid
        expect(prepareDate(input, input)).toEqual(output)
    })

    it('should return date and time in correct format', () => {
        const { input, output } = testDates.valid
        expect(prepareDate(input, input)).toEqual(output)
    })

    it('should return today word instead of formatted date', () => {
        const { input, output } = testDates.today
        expect(prepareDate(input, input)).toEqual(output)
    })

    it('should return yesterday word instead of formatted date', () => {
        const { input, output } = testDates.yesterday
        expect(prepareDate(input, input)).toEqual(output)
    })
})
