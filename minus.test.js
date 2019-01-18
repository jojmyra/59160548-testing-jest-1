const minus = require('./minus')

// -5 - 2 = ?
test('-5 - 2 = ?', () => {
    expect(minus(-5,2)).toBe(-7)
})

// -5 - -5 = ?
test('-5 - -5 = ?', () => {
    expect(minus(-5,-5)).toBe(0)
})

// 61 - 62 = -1
test('61 - 62 = -1', () => {
    expect(minus(61,62)).toBe(-1)
})

// 5 - 5 = 0
test('5 - 5 = 0', () => {
    expect(minus(5,5)).toBe(0)
})

// 2 - 4 = -2
test('2 - 4 = -2', () => {
    expect(minus(2,4)).toBe(-2)
})