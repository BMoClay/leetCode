// 2- find out (return true/false) if a given string is a palindrome. 
// kayak mom racecar

//Method 1 - check for palindrome using built-in functions
// const isPalindrome = (string3) => {
//     let re = /[\W_]/g;
//     let lowercaseRegExString = string3.toLowerCase().replace(re, '');
//     let reversedString = lowercaseRegExString.split('').reverse().join('')

//     if (reversedString === string3) {
//         console.log(true)
//         return true
//     }
//     console.log(false)
//     return false   
// }

// const string1 = "kayak"
// const string2 = "buyak"
// const string3 = "moom"
// isPalindrome(string3)

//Method 2 - check for palindrome using for loop
const isPalindrome = (string1) => {
    for (let i = 0; i < string1.length/2; i++) {
        if (string1[i] !== string1[string1.length - 1 - i]) {
            console.log(false)
            return false
        }
        console.log(string1.length/2)
        console.log(true)
        return true
    }
}

const string1 = "kayak"
const string2 = "buyak"
const string3 = "moom"
isPalindrome(string1)

