const maxSubArr = (arr, n) => {
   
    let maxSum = 0
    let tempSum = 0
    
    for (let i = 0; i < n; i++){
        currentNum = arr[i]
        maxSum += currentNum
    }

    tempSum = maxSum

    for (let i = n; i < arr.length; i++){
        let nextNum = arr[i]
        let firstNumberInSubArray = arr[i-n]
        tempSum = tempSum - firstNumberInSubArray + nextNum
        if (tempSum > maxSum){
            maxSum = tempSum
        }
    }
    return maxSum
}

const arr = [100,200,300,400,100, -100]
const n = 2
console.log(maxSubArr(arr,n))