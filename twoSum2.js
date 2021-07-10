// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may 
// not use the same element twice.

// You can return the answer in any order.

// let numbers = [2,7,11,15] 
// let target = 9

const twoSum = (numbers, target) => {
    
    let hashMap = {};
    let results = [];

    for (let i = 0; i < numbers.length; i++) {
        hashMap[numbers[i]] = i
        // console.log(`hashmap create1 ${hashMap[numbers[i]]}`)
     if (hashMap[target - numbers[i]] !== undefined) {
         results.push(hashMap[target - numbers[i]], hashMap[numbers[i]])
        }
    }
    console.log(hashMap)
    console.log(results)

}

let numbers = [5,2,11,15,7] 
let target = 26
twoSum(numbers,target)