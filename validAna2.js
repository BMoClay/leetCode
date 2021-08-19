const validAnagram = (str1, str2) => {

    if (str1.length !== str2.length) return false;
    
    let freqObj1 = {}
    let freqObj2 = {}

    for (let val of str1){
        if (freqObj1[val] === undefined){
            freqObj1[val] = 1
        } else {
            freqObj1[val] +=1
        }
    }

    for (let val of str2){
        if (freqObj2[val] === undefined){
            freqObj2[val] = 1
        } else {
            freqObj2[val] +=1
        }
    }

    console.log(freqObj1,freqObj2)

    for (let key in freqObj2){
        if (!(freqObj1[key])){
            return false
        }
    }
    return true
}

str1 = "car"
str2 = "rca"
console.log(validAnagram(str1,str2))