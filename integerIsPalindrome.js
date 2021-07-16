const isPalindrome = (num) => {
    let str = num.toString()

    for (let i = 0; i < str.length; i++){
        
        if (str[i] !== str[str.length - i - 1]){
            return false
        }
    }
   return true
}

const num = 3194613
console.log(isPalindrome(num))
// isPalindrome(num)

// var nums = 121

// const isPalindrome = (nums) => {
//     let str = nums.toString()
//     let reversedStr = nums.toString().split('').reverse().join('')

//     if (str === reversedStr) {
//         return true
//     }
//     return false
// }

// console.log(isPalindrome(nums))