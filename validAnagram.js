// you can use a frequencyCounter

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
     
    let checkerObj = {};
    
    for (let i = 0; i < str1.length; i++) {
         // just so I dont have to type nested k/v pairs make variable for letter
        let letter = str1[i];
        // if letter exists, increment otherwise set to 1
        checkerObj[letter] ? checkerObj[letter] += 1 : checkerObj[letter] = 1
    }
    
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!checkerObj[letter]) {
            return false;
        } else {
            checkerObj[letter] -= 1;
        }
    }
    console.log("true")
    return true
}

let str1 = "dnagram"
let str2 = "nagaram"
console.log(validAnagram(str1, str2))












// let strCheck = {}

// for (let i = 0; i < str1.length; i++){
    //     strCheck[i] = str1[i]
    // } 
    // strCheck.sort((a, b => a > b))
    
    // for (let i = 0; i <str2.length; i++){
    //     console.log(str2[i])
    //     if(str2[i] in strCheck){
    //         console.log(true)
    //         return true
    //     }
    // }