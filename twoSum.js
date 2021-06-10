// Given an array of integers nums and an integer target, return indices of the 
// two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may 
// not use the same element twice.

// You can return the answer in any order.

// let numbers = [2,7,11,15] 
// let target = 9

// const twoSum = () => {
//    let checker 
//     let checkerIndex1
//     let checkerIndex2
//     let result = [];
   
//     for (let i = 0; i < numbers.length; i ++) {
//         let checker = numbers[i]
//         if (checker + numbers[i + 1] === target) {
//             result = numbers[i + 1]
//         }
//         console.log(result)
//         }
//     }

    
// const twoSum = (numbers, target) => {
    
//     const hashMap = {};
//     let result = []
    
//     for(let i=0; i < numbers.length; i++){
//     // check if the element's complement exists in the hashmap
//     console.log(hashMap)
//         if (hashMap[target - numbers[i]] !== undefined) {
//             // console.log(hashMap)
//             // if hashmap_object[9 - 2] exists

//             // if yes, return the indices of the complement and current element
//             // console.log(hashMap)
//             // console.log([hashMap[target-numbers[i]], i])
//             return [hashMap[target-numbers[i]], i]

//         }
//         // If not, put the element into hash w index
//         // the key is the value of the number's elements and
//         // the value is the index of the number's elements
//         hashMap[numbers[i]] = i
//         // hashmap_object 2: 0
//         // hashmap_object  11: 1 
//         // hashmap_object 15: 2
//     }

// };


// let numbers = [2,11,15, 7] 
// let target = 9

// console.log(twoSum(numbers, target))


// var twoSum = function(numbers, target) {
//     let checkNumber;

//     for (let i = 0; i < numbers.length; i++){
//         checkNumber = numbers[i]
//         console.log(`checkNumber ${checkNumber}`)
//         console.log(`i ${i}`)
//         for (let j = 1; j < numbers.length; j++) {
//             console.log(`${j}`)
//             // console.log(`${}`)
//             if (checkNumber + numbers[j] === target) {
//                 console.log(`results [${i}, ${j}]`)
//             }
//         }
//     }
        
// };


// const nums = [2, 7, 11, 15]
// const target = 9
// twoSum(nums, target)

var twoSum = function(numbers, target) {
    let map = [];
    let result = [];

    for (let i = 0; i < numbers.length; i++){
        if (map[numbers[i]] != null) {
            index = map[numbers[i]]
            result[0] = index + 1;
            result[1] = i + 1;
            break;
        } else {
            map[target - numbers[i]] = i;
        }
    }
    console.log(result)
        return result
};


const nums = [2, 7, 11, 15]
const target = 9
twoSum(nums, target)