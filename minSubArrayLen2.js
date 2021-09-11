// return the minimal length of a contiguous subnums of which
// the sum is greater than or equal to sum
// if there isnt one return 0

const minSubarrayLen = (nums, sum) => {
    let total = 0
    let start = 0
    let end = 0
    let minLength = Infinity

    while (start < nums.length){
        if (total < sum && end < nums.length){
            total += nums[end]
            end ++
            console.log(`if ------->`, `end:`, end, `start:`, start,`minLength`, minLength, `total:`, total)
        } else if (total >= sum){
            minLength = Math.min(minLength, end - start)
            console.log(`                          minLen b4+>`, minLength)
            total -= nums[start]
            start ++
            console.log(`else if -->`,`end:`, end, `start:`, start, `            total:`, total)
        } else {
            break
        }
    }
    return minLength === Infinity ? 0 : minLength
}

const nums = [6,0,1,6,1,3,2]
const sum = 7
console.log(minSubarrayLen(nums,sum))

// while (start < nums.length){
//     let number = nums[startingIndex]
//     total += number
//     startingIndex ++
// }

// let temptotal = total
// let nextIndex = startingIndex
// for (let i = startingIndex; i < nums.length; i++){
//     let firstNumInSet = nums[nextIndex - startingIndex]
//     temptotal -= firstNumInSet
//     console.log(temptotal, firstNumInSet)
//     nextIndex ++
// }