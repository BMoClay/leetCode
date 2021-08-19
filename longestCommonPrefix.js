const longestCommonPrefix = (strs) => {
    let result = ""
    let checker
    let newStrs = []

    for (let str of strs) {
        if (checker === undefined){
            checker = str
        } 
        if (str.length >= checker.length && str !== checker){
            newStrs.push(str)
        } else {
            checker = str
        }
    }
    
    for (let i = 0; i < newStrs.length; i ++) { 
        //console.log(newStrs[i])
        if (checker[i] === newStrs[i][i]) {
            result = result + checker[i]
        }
    }

    console.log(result)
    return (result)
}

strs = ["dog","racecar","car"]
longestCommonPrefix(strs)
//console.log(longestCommonPrefix(strs))