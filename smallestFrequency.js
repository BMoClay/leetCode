//smallestFrequency.js
let countries = ["America", "Argentina", "Chile", "Cuba", "America"]

const smallestFrequency = (countries) => {
    
    countryCount = {}

    for (let country of countries) {
        if (country in countryCount) {
            countryCount[country] += 1
        } else {
            countryCount[country] = 1
        }
    }

    let results = []
    let tempLeastFrequent

    for (let country in countryCount) {
        const currentCountryCount = countryCount[country]
        if (tempLeastFrequent === undefined) {
            tempLeastFrequent = currentCountryCount
            results.push(country)
        } else if (currentCountryCount === tempLeastFrequent) {
            results.push(country)
        } else if (currentCountryCount < tempLeastFrequent) {
            tempLeastFrequent = currentCountryCount
            results = [country]
        }
    }
    console.log(results)
}
smallestFrequency(countries)