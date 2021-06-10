const findMax = (array1, array2) => {
    let oneBigArray = array1.concat(array2)
    let largestNum = Number.MIN_SAFE_INTEGER;
    let secondLargestNum = Number.MIN_SAFE_INTEGER;
    let smallestNum = Number.MAX_SAFE_INTEGER;
    let secondSmallestNum = Number.MAX_SAFE_INTEGER;
    
    for (const currentNum of oneBigArray) {
      if (currentNum > largestNum) {
        secondLargestNum = largestNum
        largestNum = currentNum
      } else if (currentNum > secondLargestNum) {
          secondLargestNum = currentNum 
      } else if (currentNum < smallestNum) {
        secondSmallestNum = smallestNum
        smallestNum = currentNum
      } else if (currentNum < secondSmallestNum) {
        secondSmallestNum = currentNum
        }
    }
    
    console.log(`second Smallest Num = ${secondSmallestNum}`)
    console.log("largest Num = "+largestNum)
    console.log("second Largest Num = "+secondLargestNum)
  }
  
  let array1 = [10,5,7,2,4,1,24,30,25]
  let array2 = [8,23,29,25,40,0,24,-1,-2]
  findMax(array1, array2)