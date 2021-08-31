/* Write a function that given a list of countries, returns the country(s) that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"] 

// ::make and obj to keep track of the count with keys and values
// ::return the key(s) with the lowest value
// */

// // var countries = ["Cuba", "America", "Argentina", "Cuba", "America", "Chile", "Argentina", "America",]

// // const leastFrequent

let countries = ["Japan", "Cuba", "America", "Argentina", "Cuba", "America", "Chile", "Argentina", "America"]

const leastFrequent = (countries) => {
    console.log(`countries`, countries)

    let freqObj = {}
    let results = []

    for (let i = 0; i< countries.length;i++){
        if (countries[i] in freqObj){
            freqObj[countries[i]] +=1
        } else {
            freqObj[countries[i]] =1
        }
    }

    let minValue

    for (let country in freqObj) {
        let currentValue = freqObj[country]
        if (minValue === undefined){
            minValue = currentValue
        } else if (currentValue <= minValue){
            minValue = currentValue;
        } 
        if (freqObj[country] === minValue){
            results.push(country)
        }
    }
 
    return results
}

console.log(leastFrequent(countries))


// let arr = ["Argentina", "Cuba", "Chile", "Argentina", "Cuba", "USA", "Japan", "Japan", "India"]

// const leastFrequent = (arr) => {
//     console.log(`arr:`, arr)
//     let freqObj = {};
//     let results = [];

//     for (let i = 0; i < arr.length; i++) {
//         let currentCountry = arr[i]
//         freqObj[currentCountry] ? freqObj[currentCountry] += 1 : freqObj[currentCountry] = 1;
//     }

//     let values = Object.values(freqObj)
//     let sortedValues = values.sort()
//     let minValue = sortedValues[0]

//     for (let country in freqObj) {
//         if (freqObj[country] === minValue) {
//             results.push(country)
//         }
//     }

//     return results;
// }

// console.log(leastFrequent(arr))