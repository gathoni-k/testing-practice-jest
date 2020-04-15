const capitalize = require('./capitalize')
test('capitalize word', () => {
    expect(capitalize('word')).toBe('Word')
})
test('capitalize sentence', () => {
    expect(capitalize('hello world')).toBe('Hello world')
})