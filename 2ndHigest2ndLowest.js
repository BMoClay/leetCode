//  Find the 2nd largest and 2nd smallest number in two arrays of numbers
// // I.e. - [10,5,7,2,4,1,24] & [8,23,29,25,40,0,24] -> 2nd Largest : 29 , 2nd Smallest: 1

const secondBiggestAndSmallest = () => {
   let combinedArray = array1.concat(array2)
   let biggest = 0
   let smallest = 0

   for (let number of combinedArray) {
       if (number >= biggest) {
           biggest = number
       }
       if (number <= smallest) {
           smallest = number
       }
   }

   let sortedArray = combinedArray.sort((a,b) => a - b)

   console.log(sortedArray[1], sortedArray[sortedArray.length - 2])
}

const array1 =[10,5,7,2,4,1,24]
const array2 = [8,23,29,25,40,0,24]
secondBiggestAndSmallest(array1, array2)