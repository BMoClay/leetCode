console.time('bens')
const twoSum = (nums, target) => {

    let first = 0
    let next = 1
    let sum = 0
    let lastIndex = nums.length -1

    console.log(``)
    console.log(`  ****** global variables ******    `, `nums:`, nums, `first:`,first, `next:`, next, `target:`, target,`lastIndex:`, lastIndex)
    console.log(``)
    
    while (first < lastIndex && next <= lastIndex){ 
        let baseNum = nums[first]
        let nextNum = nums[next]
        console.log(`baseNum:`, baseNum, `nextNum:`, nextNum)
        sum = baseNum + nextNum
        console.log(`above if in while loop ---------------------------------->`,`first:`,first, `next:`, next,`baseNum:`, baseNum, `nextNum:`, nextNum, `sum:` ,sum)
        if (sum === target){
            return [first, next]
        } else if (next < lastIndex){
            next ++
            console.log(`             --->    else if (next < lastIndex):          `,`first:`, first, `next:`, next,`baseNum:`, baseNum, `nextNum:`, nextNum, `sum:` ,sum )
        } else if (next === lastIndex){
            console.log(`               --> 1st part else if -> next === lastIndex:`,`first:`, first, `next`, next, `lastIndex:`,lastIndex)
            first++
            next = first + 1
            console.log(`                -> 2nd part else if ~~~~~~~~~~> first ++: (first)`, first, `next = first: (next)`, next)
        } 
    }
    return false
}
const nums = [7,11,15,20,50]
const target = 70
console.log(twoSum(nums,target))
console.timeEnd('bens')