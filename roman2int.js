
const roman2int = (romanNumerals) => {
    
    const conversion = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
    let array = romanNumerals.split("");
    let total = 0;
    let firstRomanNumeral;
    let firstValue;
    let secondRomanNumeral;
    let secondValue;

    for (let i = 0; i < array.length; i ++) {
        firstRomanNumeral = array[i];
        firstValue = conversion[firstRomanNumeral];
        secondRomanNumeral = array[i + 1];
        secondValue = conversion[secondRomanNumeral];
        if (firstValue >= secondValue) {
            total += firstValue;
        } else if (firstValue < secondValue) {
            total -= firstValue;
        } else if (firstValue && !secondValue) {
            total += firstValue
        }
    }
    console.log(total)
    return total

}
const romanNumerals = "MCMXCVIII"
roman2int(romanNumerals)