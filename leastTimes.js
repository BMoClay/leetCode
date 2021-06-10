// * Write a function that given a list of countries, returns the country(s) that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"] 

let countries = ["USA", "USA", "China", "Brazil", "China", "England"]

const leastFrequent = (countries) => {
    
    const countryCounts = {};
    
    for (const country of countries) {
        if (country in countryCounts) {
            countryCounts[country] += 1;
        } else {
            countryCounts[country] = 1;
        }
    }

    let currentLowestCount;
    let results = [];
    for (const country in countryCounts) {
      const currentCountryCount = countryCounts[country];
      if (currentLowestCount === undefined) {
        currentLowestCount = currentCountryCount;
        results.push(country);
      } else if (currentCountryCount === currentLowestCount) {
        results.push(country);
      } else if (currentCountryCount < currentLowestCount) {
        currentLowestCount = currentCountryCount;
        results = [country];
      }
    }
    return results;
}

console.log(leastFrequent(countries));




// const leastFrequent = () => {

//     let countryCounts = {}

//     for (let country of array) {
//         if (country in countryCounts) {
//             countryCounts[country] += 1
//         } else {
//             countryCounts[country]
//         }
//     }

//     let tempLeastFrequent = [];
//     let leastFrequentCountry = []


// }

// let array = ["Argentina", "Cuba", "Chile", "Argentina"]
// leastFrequent(array)

// for (let country in countryCounts) {
//     let currentCountryCount = countryCount[country];
//     console.log(currentCountryCount)
//     if (tempValue === undefined) {
//         console.log(tempValue)
//         tempValue = currentCountryCount
//         results.push(country)
//         console.log(results)
//     } else if (currentCountryCount === tempValue) {
//         results.push(country)
//     } else if (currentCountryCount <= tempValue) {
//         tempValue = currentCountryCount
//         results = [country]
//     }
// }
// console.log(results)