// /* Write a function that given a list of countries, returns the country(s) 
// that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"]

const leastFrequent = () => {
    let countryCount = {}

    for (let country of countries) {
        if (country in countryCount) {
            countryCount[country] += 1
        } else {
            countryCount[country] = 1
        }
    }

    let result = []
    let tempLeastFrequent;

    for (let country in countryCount) {
        if (tempLeastFrequent === undefined) {
            tempLeastFrequent = countryCount[country]
            result.push(country)
        } else if (countryCount[country] === tempLeastFrequent) {
            result.push(country)
        } else if (countryCount[country] < tempLeastFrequent) {
            tempLeastFrequent = countryCount[country]
            result = [country]
        }
    }
    console.log(countryCount)
    console.log(result)
}

const countries = ["Argentina", "Cuba", "Argentina", "Chile", "Chile", "Cuba", "Argentina"]
leastFrequent(countries)