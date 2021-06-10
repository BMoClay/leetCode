// * Find the 2nd largest and 2nd smallest number in two arrays of numbers
// I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1


let array1 = [10,5,7,2,4,1,24]
let array2 = [8,23,29,25,40,0,24, 40, -1]

const secondLargestAndSmallest = (array1, array2) => {
   let combinedArray = array1.concat(array2)
   let tempHighestNum;
   let secondHighestNum;
   let tempLowestNum;
   let secondLowestNum;

   for (let number of combinedArray) {
       if (tempHighestNum === undefined) {
           tempHighestNum = number
       } else if (tempHighestNum < number) {
           secondHighestNum = tempHighestNum;
           tempHighestNum = number
       } else if (tempLowestNum === undefined) {
           tempLowestNum = number
       } else if (tempLowestNum > number) {
           secondLowestNum = tempLowestNum
           tempLowestNum = number
       }
   }
   console.log(`secondLowest: ${secondLowestNum}, secondHighest: ${secondHighestNum}`)
}

console.log(secondLargestAndSmallest(array1, array2))