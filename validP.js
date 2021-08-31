/* 
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*/

const validP = (str1) => {

    let reverseString = ""

    for (let i = str1.length - 1; i >= 0; i--){
        reverseString += str1[i]
    }
    if (str1 !== reverseString) return false;

    return true
}
const str1 = "cattac"
console.log(validP(str1))