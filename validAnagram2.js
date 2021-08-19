const validAnagram = (str1, str2) => {

    if (str1.length !== str2.length) return false

    frequencyObj1 = {}
    frequencyObj2 = {}

    for (let val of str1){
        frequencyObj1[val] = (frequencyObj1[val] || 0) +1 
    }

    for (let val of str2){
        frequencyObj2[val] = (frequencyObj2[val] || 0) +1 
    }

    for (let key in frequencyObj1){
        if (!(key in frequencyObj2)) {
            return false
        }
    }
    return true
}

str1 = "car"
str2 = "rac"
console.log(validAnagram(str1,str2))