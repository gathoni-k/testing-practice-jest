function analyze(numbers) {
    let len = numbers.length
    let min = Math.min(...numbers)
    let max = Math.max(...numbers)
    let sumOfNumbers = numbers.reduce((a,b) => {return a+b})
    let average = sumOfNumbers/len

    let resultObj = {
        len,
        min,
        max,
        average
    }
    return resultObj
}
module.exports = analyze