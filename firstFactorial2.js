// *Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
// For example: if num = 4, then your program should return (4 3 2 1) = 24.

const firstFactorial = (num) => {
   if (num === 0) {
    console.log(1)
    return 1
   } else if (num < 0) {
    console.log(-1)   
    return -1
   }

    let total

    for (let i = num - 1; i >= 1; i--) {
       total = num *= i
    }
    console.log(total)
}

firstFactorial(4)