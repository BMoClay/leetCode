// 4- given an array of integers find the number with longest repeating sequence.
//     findMostRepeated([2,6,6,6,1,1,2,2,1,1,1,1,1,4,4,4,4,6,4,4,4,1,4,4]) = 1

const longestRepeating = () => {
    let currentLongest
    let result

    for (let i = 0; i < sequence.length; i++) {
        for (let j = i; j < sequence.length; j++) {
            if (result === undefined) {
                result = sequence[i]
                currentLongest = result
            } else if (currentLongest !== j) {
                console.log(`current longest: ${currentLongest}`)
                console.log(`i: ${i}`)
                console.log(`j: ${j}`)            
            }
        }
    }
}

const sequence = [2,6,6,6,1,1,2,2,1,1,1,1,1,4,4,4,4,6,4,4,4,1,4,4]
longestRepeating(sequence)