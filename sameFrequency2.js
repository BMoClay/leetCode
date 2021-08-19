const sameFrequency = (str1, str2) => {

    let freqCounter = {}
    let string1 = str1.toString()
    let string2 = str2.toString()

    for (let i = 0; i < string1.length; i++){
       let currentNum = string1[i]
       freqCounter[currentNum] ? freqCounter[currentNum] += 1 : freqCounter[currentNum] = 1 
        }
    
    for (let i = 0; i < string2.length; i ++){
        let currentNum = string2[i]
        if (!freqCounter[currentNum]) {
            return false
        } else {
            freqCounter[currentNum] -= 1;
        }
    }
    return true
}

let str1 = 1822
let str2 = 2821
console.log(sameFrequency(str1,str2)) 