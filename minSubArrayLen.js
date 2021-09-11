// return the minimal length of a contiguous subarray of which
// the sum is greater than or equal to num
// if there isnt one return 0

const minSubArrayLen = (array, num) => {

    let minLength = 0
    let tempSum = array[minLength]
    let sum = num
    let next = minLength

    if (tempSum === num) return 1

    while (tempSum !== num){
        if (array[minLength] >= num){
            return 1
        } else if (tempSum < num){
            next ++
            minLength ++
            tempSum += array[next]
            console.log(`else if 1 ->`, `next:`, next, `minLength:`, minLength, `tempSum:`, tempSum, `sum:`, sum)
        } else if (tempSum >= num) {
            sum = tempSum
            minLength = next + 1
            console.log(`else if 2 ->`, `tempSum:`, tempSum, `sum:`, sum, `minLength:`, minLength)
        }
    }

    if (tempSum < num){
        return 0
    }
    
    sum = tempSum
    let forward = minLength + 1
    let oldIndex = 0
    console.log(`before while loop -------->`,`minLength:`, minLength, `tempSum:`, tempSum, `forward:`, forward)
    
    while (forward + oldIndex< array.length && minLength >= 0) {
        let nextNum = array[forward]
        let oldNum = array[oldIndex]
        let secondOldest = array[oldIndex + 1]
        console.log(`while loop top level ----->`,`oldIndex:`, oldIndex, `forward:`, forward,`minLength:`, minLength, `nextNum:`, nextNum, `oldNum:`, oldNum, `tempSum:`, tempSum,`sum:`, sum)
        tempSum = tempSum + nextNum - oldNum 
        console.log(`while loop bottom level -->`,`oldIndex:`, oldIndex, `forward:`, forward,`minLength:`, minLength, `nextNum:`, nextNum, `oldNum:`, oldNum, `tempSum:`, tempSum, `sum:`, sum)
        if (tempSum - secondOldest >= num){
            minLength --
            oldIndex ++
            tempSum = tempSum - secondOldest
            console.log(`bottom of if statement --->`, `minLength:`, minLength, `nextNum:`, nextNum, `tempSum:`, tempSum)
        } else { 
            
            forward ++
            console.log(`bottom of else statement ->`, `minLength:`, minLength, `nextNum:`, nextNum, `tempSum:`, tempSum, `forward:`, forward)
        }        
    }
    return minLength + 1
}

const array = [6,0,1,6,1,3,2]
const num = 7
console.log(minSubArrayLen(array,num))