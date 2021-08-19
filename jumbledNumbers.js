const jumbledNumbers = (str) => {
let letterFreqObj = {}


for (let i = 0; i < str.length; i++){
    let key = str[i]
   if (!(key in letterFreqObj)){
       letterFreqObj[key] = 1
   } else {
       letterFreqObj[key] += 1
   }
}

console.log(letterFreqObj)
}

const str = "reuonnoinfe"
let res = 149
console.log(jumbledNumbers(str))