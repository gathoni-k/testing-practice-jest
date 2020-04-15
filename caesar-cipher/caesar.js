function encryptUpperCase(char, shift) {
    return String.fromCharCode((char - 65 + shift) % 26 + 65)
} 
function encryptLowerCase(char, shift) {
    return String.fromCharCode((char - 97 + shift) % 26 + 97);
}

function caesar(text, shift) {
    let encryptedText = ''
    for (let i = 0; i < text.length; i++) {
        //get the character code
        var char = text.charCodeAt(i);

        // encrypy uppercase letters
        if(char >= 65 && char <=  90) {
            encryptedText += encryptUpperCase(char, shift); 

        // encrypt lowercase letters
        }else if(char >= 97 && char <= 122){
            encryptedText += encryptLowerCase(char, shift)

        // ignore others
        }else {
            encryptedText += text.charAt(i);
        } 
    }
    return encryptedText
}

module.exports = caesar