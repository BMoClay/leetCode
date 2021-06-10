// write a function that checks if two provided strings are anagrams of 
// each other; letter casing shouldn’t matter. Also, consider only characters, 
// not spaces or punctuation. For example
// anagram('finder', 'Friend') --> true
// anagram('hello', 'bye') --> false"

const anagramCheck = () => {
    let string1Lowercase = string1.toLowerCase()
    let string2Lowercase = string2.toLowerCase()
    let checkString1 = {}
    let checkString2 = {}   
    
    for (let character of string1Lowercase) {
        if (character in checkString1) {
            checkString1[character] += 1
        } else {
            checkString1[character] = 1
        } 
    }

    for (let character of string2Lowercase) {
        if (character in checkString2) {
            checkString2[character] += 1
        } else {
            checkString2[character] = 1
        }
    }

    for (let character in checkString1) {
        if (!checkString2[character] ) {
            return false
        } else {
            checkString2[character] -= 1
        }
    }
    
    return true
}

const string1 = 'inderff'
const string2 = 'Ffriend'
console.log(anagramCheck(string1, string2))