const maxSubArraySum = (arr, n) => {
    if (arr.length < n) return null

    let maxSum = 0
    let tempSum = 0

    for (let i = 0; i < n; i ++){
        let currentNum = arr[i]
        maxSum += currentNum
    }
    
    tempSum = maxSum
    
    for (let i = n; i < arr.length; i ++){
        let nextNum = arr[i]
        let firstNumSubArr = arr[i - n]
        tempSum = tempSum - firstNumSubArr + nextNum
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
const arr = [2,6,9,5,1,8,5,6,3]
const n = 3
console.log(maxSubArraySum(arr,n))