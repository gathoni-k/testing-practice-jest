const caesar = require('./caesar')

test('shifts string using key 2', () => {
    expect(caesar('attack', 2)).toBe('cvvcem')
})
test('wraps from z to a', () => {
    expect(caesar('z', 1)).toBe('a')
})
test('keeps same case', () => {
    expect(caesar('zZ', 1)).toBe('aA')
})
test('keeps punctuation', () => {
    expect(caesar('attack.', 2)).toBe('cvvcem.')
})