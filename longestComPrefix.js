// const longestComPrefix = () => {
   
//     let commonPrefix = strs.reduce((a, b) => a.length <= b.length ? a : b)
//     let indexLimit = commonPrefix.length -1
//     let checker = commonPrefix[indexLimit]


//     for (let i = 0; i < strs.length; i++ ){
        
//         if (checker === strs[i][indexLimit]) {
//             console.log("ues")
//             indexLimit--
//         } else if (checker !== strs[i][indexLimit]) {
//            let newPrefix = commonPrefix.slice(0,-1)
//            console.log("this",newPrefix)
//         }
//     }
//     console.log(commonPrefix)
//     //return commonPrefix
// }

// const strs = ["flower", "flow", "flight"]
// console.log(longestComPrefix(strs))

const longestCommon = (arr) => {

    let prefix = "";
    let firstWord = arr[0]

    for (let i = 0; i<firstWord.length; i++){
        let currentChar = firstWord[i]

        for (let word of arr){
            if (currentChar !== word[i]){
                return prefix
            }
        }
        prefix += currentChar
    }
    return prefix

}
const arr = ["flower", "flow", "flight"]
console.log(longestCommon(arr))