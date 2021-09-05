const maxSubarraySum = (array, num) => {
    
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i <= num-1; i++){
        maxSum += array[i]
    }
    tempSum = maxSum 
     
    for (let i = num; i < array.length; i++) {
        let outGoingNum = array[i - num]
        let incomingNum = array[i]
        let diff = incomingNum - outGoingNum
        tempSum = tempSum + diff 
        maxSum = Math.max(tempSum, maxSum)
    }
return maxSum;
}
const array = [2,6,9,3,1,8,5,6,3]
const num = 3
console.log(maxSubarraySum(array, num))
