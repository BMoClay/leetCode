const findLongestSubstring = (string) => {
    let start = 0
    let currentMax = 0
    let stringObj = {}
    for (let i = 0; i < string.length; i ++) {
        let char = string[i]
        console.log(`for loop top ----------------------------------->`, `currentMax:`, currentMax,`i:`, i,`start:`, start,`char:`, char,`stringObj[char]:`, stringObj[char],  `stringObj:`, stringObj)
        if (stringObj[char]) {
            start = Math.max(start, stringObj[char])
            console.log(`if (stringObj[char]) --------------------------->`, `currentMax:`, currentMax,`i:`, i,`start = Math.max(start:`, start,`|| stringObj[char]:`, stringObj[char],`)`, `char:`, char, `stringObj:`, stringObj)
            console.log('')
        }
        currentMax = Math.max(currentMax, i - start + 1)
        stringObj[char] = i + 1
        console.log(`currentMax = Math.max(currentMax, i - start + 1)`, `currentMax:`, currentMax,`i:`, i,`start:`, start,`char:`, char,`stringObj[char]:`, stringObj[char], `stringObj:`, stringObj)
        console.log('')
    }
    return currentMax
}
const string = 'thisisawesome'
console.log(findLongestSubstring(string))