const isSubsequence = (str1, str2) => {

    let string = str1.split('')
    let firstIndex = 0
    let secondIndex = 0
    
    while (string.length > 0 && secondIndex <= str2.length && firstIndex <= str1.length){
        let str1Char = str1[firstIndex]
        let str2Char = str2[secondIndex]
        console.log(`while (top) ----->`, `string:`, string, `str1Char:`, str1Char, `str2Char:`, str2Char,`firstIndex:`, firstIndex,`secondIndex:`, secondIndex)
        if (str2Char === str1Char){
            secondIndex ++
            firstIndex ++
            string.shift()
            console.log(` if chars equal ->`, `str1Char:`, str1Char, `str2Char:`, str2Char,`string:`, string, `firstIndex:`, firstIndex,`secondIndex:`, secondIndex,`string.length:`, string.length)
        } else if (str2Char !== str1Char) {
            secondIndex ++
            console.log(`  not equal ----->`, `str1Char:`, str1Char, `str2Char:`, str2Char,`string:`, string, `firstIndex:`, firstIndex,`secondIndex:`, secondIndex,`string.length:`, string.length)
        } else {
            break
        }
    }
    return string.length? false : true
}

const str1 = 'abc'
const str2 = 'abra cabadara'
console.log(isSubsequence(str1, str2))