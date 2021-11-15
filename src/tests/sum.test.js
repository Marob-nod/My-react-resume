import sum from 'src/Pages/App/App.tsx'

describe('sum', () => {
    describe('Structure', () => {
        test('It should give 5 for 2 and 3', () => {
            expect(typeof sum).toBe('function');
        })
    })
    describe('Execution', () => {
        test('it should give 5 for 2 and 3', () => {
            const res = sum(2, 3)
            expect(result).toBe(5)
        })
    })
})

