
const largestSubarraySum = (array) => {
 
    if (array.length <= 1) return array

    let sum = array[0]
    let current = 0
    let next = 1
    let tempSum = sum
    
    while (current < next){
        let currentNum = array
        let nextNum = array[next]
        tempSum += nextNum
        
        if (sum > tempSum){
            current + 2
            next + 2
            sum = array[current]
            tempSum = 0
        } else if (sum <= tempSum){
            sum += nextNum
            next ++
        } else {
            break
        }
    }
    return sum
}

const array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
console.log(largestSubarraySum(array))

if (array.length <= 1) return array

let tempSum = array[0];
let maxSum = array[0];

for (let i = 1; i < array.length; i++) {
    
    let currentNum = array[i]

    if (currentNum > tempSum + currentNum) {
        tempSum = currentNum;
    } else {
        tempSum += currentNum;
    }
    
    if (tempSum > maxSum ) {
        maxSum = tempSum;
    }
}
console.log(maxSum);