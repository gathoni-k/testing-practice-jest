let reverseString = (string) => {
    // convert string to array and reverse it
    let reversedArr = string.split('').reverse()
    // convert to string
    let reversedStr = reversedArr.join('')
    return reversedStr
}
module.exports = reverseString