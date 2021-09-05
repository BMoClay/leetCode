const slidingWindow = (array, num) => {
    console.log(`array:`, array, `num:`, num)

    let tempSum = 0
    let maxSum = 0
    for (let i = 0; i < num; i ++){
        maxSum += array[i]
    }

    tempSum = maxSum

    for (let i = num; i < array.length; i ++){
        tempSum = tempSum - array[i - num] + array[i]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}
const array = [2,6,9,3,1,8,5,6,3,21]
const num = 3
console.log(slidingWindow(array, num))