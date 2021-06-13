// reverseInt.js
// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit 
// integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// let array = String(number).split('').map(number => {
//     console.log(Number(number))
//     return Number(number)
// })

// let reversed = array.reverse()
// console.log(reversed)
// let joined = reversed.join('')
// return joined

// const reverseInt = (number) => {
//     const limit = 2147483648;
//     const k = number < 0 ? -1 : 1;
//     const n = Number(String(Math.abs(number)).split('').reverse().join(''));
//     console.log(n)
//     return n > limit ? 0 : n * k;
// }

// let number = 123234234234234234234;
// reverseInt(number)

const reverse = nums => {
    const limit = 2147483648;
    const k = nums < 0 ? -1 : 1;
    const n = Number(String(Math.abs(nums)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

console.log(reverse(-1238787))