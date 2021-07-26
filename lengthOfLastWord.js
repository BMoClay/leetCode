// Given a string s consists of some words separated by 
// spaces, return the length of the last word in the string.
// If the last word does not exist, return 0. A word is 
// a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (s) => {    
    let splitString = s.split("")
    let lastWordCount = 0

    let indexForLastString = splitString.length -1

    for (let i = indexForLastString; i>=0; i --){
        if (s[indexForLastString] === ' ') {
            indexForLastString--
        }
    }
    
    for (let i = indexForLastString; i >= 0; i--){
        if (splitString[i] !== ' ') {
            lastWordCount += 1
        } else if (splitString[i] === ' '){
            return lastWordCount
        }
    }
    return lastWordCount
}

const s = " a "
console.log(lengthOfLastWord(s))
