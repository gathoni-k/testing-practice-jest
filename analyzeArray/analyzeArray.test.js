const analyze = require('./analyzeArray')

test('returns an object', () => {
    expect(typeof(analyze([1,2]))).toBe('object')
})

test('returns object with correct length', () => {
    expect(analyze([1,2]).len).toEqual(2)
})

test('returns object with correct max', () => {
    expect(analyze([1,2]).max).toEqual(2)
})

test('returns object with correct min', () => {
    expect(analyze([1,2]).min).toEqual(1)
})

test('returns object with correct average', () => {
    expect(analyze([1,2]).average).toEqual(1.5)
})

test('returns resolved object', () => {
    let obj = {
        len: 2,
        min: 1,
        max: 2,
        average: 1.5
    }
    expect(analyze([1,2])).toEqual(obj)
})