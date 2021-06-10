/*
*write a function that checks if two provided 
strings are anagrams of each other; 
letter casing shouldn’t matter. 
Also, consider only characters, not spaces or punctuation. 
For example 
anagram('finder', 'Friend') --> true anagram('hello', 'bye') --> false"
*/

const anagramCheck = () => {
    if (string1.length !== string2.length) {
        console.log('false')
        return false;
    }
    
    let string1Lowercase = string1.toLowerCase()
    let string2Lowercase = string2.toLowerCase()
    let string1LetterCounts = {}
    let string2LetterCounts = {}

    for (let letter of string1Lowercase) {
        if (letter in string1LetterCounts) {
            string1LetterCounts[letter] += 1; 
        } else {
            string1LetterCounts[letter] = 1;
        }
    }
       for (let letter of string2Lowercase) {
        if (letter in string2LetterCounts) {
            string2LetterCounts[letter] += 1; 
        } else {
            string2LetterCounts[letter] = 1;
        }
    }

    console.log(string1LetterCounts)
    console.log(string2LetterCounts)

    for (let letter in string2LetterCounts) {
        if(!string1LetterCounts[letter]) {
            console.log('false')
            return false;
        } else {
            string1LetterCounts[letter] -=1
        }
    }
    console.log('true')
    return true;    
}

let string1 = 'finider'
let string2 = 'Friiend'
anagramCheck(string1, string2)