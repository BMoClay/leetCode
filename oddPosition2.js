// * Program to print elements of an string present on ODD 
// position, along with the count of those elements in the 
// entire string
// i.e abbloseckc - b:2,l:1,s:1,c:2

const oddPosition = (string) => {
    let oddObject = {}
    let characterCount = new Set();

    // for (let character of string) {
    //     if (character in oddObject) {
    //         oddObject[character] += 1
    //     } else {
    //         oddObject[character] = 1
    //     }  
    // }

    for (let i = 0; i < string.length; i ++) {
        if (string[i] in oddObject) {
            oddObject[string[i]] += 1
        } else {
            oddObject[string[i]] = 1
        }  
        if (i % 2 !== 0) {
            characterCount.add(string[i])
        }
    }
    
    for (let character of characterCount) {
        console.log(`${character}: ${oddObject[character]}`)
    }
}

const string = "abbloseckc"
oddPosition(string)