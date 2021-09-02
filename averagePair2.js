const averagePair = (arr, n) => {
    // multiple pointers method
    // given a sorted arr of integers and a target number (n) 
    // we are checking if target number is equal to the average of two integers in arr
    // since arr is sorted numbers always go up
    // set pointers for first index and last index
    // while rather than a for loop
    // adjust indices based on if the sum of two numbers is greater or less than target
    // if when they are added up they are greater than target increase first index
    // else if when they are added up they are less than the target move the pointers
    // else it means they're the same return true
    let firstIndex = 0
    let lastIndex = arr.length - 1
    
    while (firstIndex !== lastIndex) {
        let firstNum = arr[firstIndex]
        let lastNum = arr[lastIndex]
        let average = [firstNum + lastNum]/2
        console.log(`firstNum:`, firstNum, `lastNum:`, lastNum, `average:`, average)
        if (average > n) {
            lastIndex --
        } else if (average < n) {
            firstIndex ++
        } else if (average === n) {
            return true
        }
    // if (firstNum > n) return false
    // else if (firstNum += secondNum )
}
}

const arr = [1,3,3,5,6,7,10,12,19]
const n = 6
console.log(averagePair(arr,n))
//true