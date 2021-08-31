const findLongestSubstring = (str) => {
    
    let longest = 0
    let seen = {}
    let start = 0

    for (let i = 0; i < str.length; i++){
        let currentChar = str[i]
        //console.log(seen[currentChar])
        if (seen[currentChar]) {
            //console.log(start)
            start = Math.max(start, seen[currentChar])
           // console.log(seen[currentChar])
        }
        console.log(longest, i, start, i - start + 1)
        longest = Math.max(longest, i - start + 1)
       //console.log(currentChar, seen[currentChar])
        seen[currentChar] = i+1
       // console.log(currentChar, seen[currentChar])
        
    }
    //return longest
}

let str = "longestsubstring"
console.log(findLongestSubstring(str))