function capitalize(string){
    // get first character of string and convert to uppercase
    // append the rest of the characters
    let capitalizedString = string.substring(0,1).toUpperCase() + string.substring(1)

    return capitalizedString
}
module.exports = capitalize