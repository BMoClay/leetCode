// Given a string s, determine if it is a palindrome, considering only 
// alphanumeric characters and ignoring cases.

const validPalindrome = (string) => {
    let reversedString = ""

    for (let i = string.length -1; i >= 0; i --) {
        reversedString += string[i]
    } if ( string === reversedString) {
        return true
    } else {
        return false
    }

}

let string = "racecar"
console.log(validPalindrome(string))