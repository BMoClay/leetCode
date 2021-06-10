// * Program to print elements of an string present on ODD position, along with the count of those elements in the entire string
// i.e abbloseckc - b:2,l:1,s:1,c:2
// create and empty object for results/odd characters counts
// separate the string into individual characterss
// loop over characterss and find odd characters and add them to my odd character counts object

// const oddPosition = (string) => {
//     // let allCharacters = string.split("");
//     let oddCharacters = new Set()
//     let oddCharacterCount = {};

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] in oddCharacterCount) {
//             oddCharacterCount[string[i]] +=1
//         } else {
//             oddCharacterCount[string[i]] = 1
//         }
//         if (i % 2 !== 0) {
//             oddCharacters.add(string[i])
//         }
//     }

//     for (const character of oddCharacters) {
//         console.log(`${character}: ${oddCharacterCount[character]}`)
//     } 
// }

// string = "abbloseckc"
// oddPosition(string)

const oddPosition = (str) => {
    var count = {};
    var oddCount = new Set()

    for (let i = 0; i < str.length; i++) {
        if (str[i] in count) {
            count[str[i]] += 1
        } else {
            count[str[i]] = 1
        }
    }

    console.log(count)
}

let str = "abbloseckc"
oddPosition(str)




















