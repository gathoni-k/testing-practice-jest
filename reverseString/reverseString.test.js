const reverseString  = require('./reverseString')

test('reverse a word', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('reverse a sentence', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh')
})