//  Find the 2nd largest and 2nd smallest number in two arrays of numbers
// // I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1

const secondBiggestAndSmallest = () => {
    let joinedArray = array1.concat(array2)
    let biggest
    let secondBiggest
    let smallest
    let secondSmallest 

    for (let number of joinedArray) {
        if (smallest === undefined) {
            smallest = number
            secondSmallest = smallest
        } else if (number <= smallest) {
            secondSmallest = smallest;
            smallest = number
        } else if (biggest === undefined) {
            biggest = number
            secondBiggest = biggest
        } else if (number >= biggest) {
            secondBiggest = biggest;
            biggest = number
        }
    }
    return (`second biggest: ${secondBiggest}, second smallest: ${secondSmallest}`)
}

const array1 =[10,5,7,2,4,1,24]
const array2 = [8,23,29,25,40,0,24]
console.log(secondBiggestAndSmallest(array1, array2))