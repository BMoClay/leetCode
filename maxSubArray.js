// Given an integer array nums, find the contiguous subarray 
// (containing at least one number) which has the largest sum 
// and return its sum. A subarray is a contiguous part of an array.

const maxSubArray = (nums) => {
    if (nums === []) return false
    let maxSum = -Infinity
    let currentSum = 0
    // iterate through the nums, store sub-problems result
    for(let i = 0; i < nums.length; i++){ 
        //cumulating answers to the top
        
        //compare currentSum add current number 
        //with current number and store the maximum value
        currentSum = Math.max(nums[i], currentSum + nums[i])
        
        //compare maxSum with currentSum and store the greater value
        maxSum = Math.max(currentSum, maxSum)
        
    }
    return maxSum    
}

const nums = [1, 2, 4, 1, -9, 3, -5]
console.log(maxSubArray(nums))