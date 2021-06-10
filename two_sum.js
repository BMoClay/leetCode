// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may 
// not use the same element twice.

// You can return the answer in any order.

// const two_sum = (numbers, target) => {
//     let result = [];
//     let testIndex;

//     for (let i = 0; i <= numbers.length; i++) {
//        testIndex = numbers[i]
//        numbers.shift()
//        if ((testIndex += numbers[i]) === target) {
//            result.push()
//        }
//     }
// }

// let numbers = [2,7,11,15] 
// let target = 9
// two_sum(numbers, target)

const twoSum = (numbers, target) => {
    // initialize an empty hash map
    const hashMap = {};
    // iterate over the elements of the given array
    for(let i=0; i<numbers.length; i++){
    // check if the element's complement exists in the hashmap
        if (hashMap[target - numbers[i]] !== undefined) {
            // if yes, return the indices of the complement
            // and current element
            console.log(hashMap)
            console.log([hashMap[target-numbers[i]], i])
            return [ hashMap[numbers[i] ] , i]
        }
        // If not, put the element into hash w index
        // the key is the value of the number's elements and
        // the value is the index of the number's elements
        hashMap[numbers[i]] = i
    }
};

let numbers = [2,7,11,15] 
let target = 9
twoSum(numbers, target)

// pseudo code
// create empty array for result
// create a variable for test number
// loop over numbers and take the first number (at bracket i)
// declare number[i] = test number
// if test number plus number[i + 1] = target
// return target
// else i ++

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 