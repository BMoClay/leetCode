// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestPrefix = (strings) => {
 
    for (let i = 0; i < strings.length; i ++) {
       console.log(!strings.every((string) => string[0][i]))
       if (!strings.every((string) => string[i] === strings[0][i])) {
           return strings[0].slice(0, i);
       } 
    }
    return strings[0]
}
   

const strings = ["fliwer", "fliw", "flight", "flit"]
console.log(longestPrefix(strings))