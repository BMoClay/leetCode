const searchInsert = (nums, target) => {
    let numsObj = {};
    let result;
    
    for (let i = 0; i < nums.length; i++) {
        numsObj[nums[i]] = i
        if(numsObj[target] === numsObj[nums[i]]) {
            result = numsObj[target]
        } else if (target > nums[i]) {
            result = i + 1
        } else if (target > nums[i + 1]) {
            result = i + 2
        } else if (result === undefined) {
            result = 0
        }
    }
    return result;
};

const nums = [1,3,5,6]
const target = 8
//searchInsert(nums, target)
console.log(searchInsert(nums, target))