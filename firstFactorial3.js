// *Have the function FirstFactorial(num) take the num parameter 
// being passed and return the factorial of it. For example: 
// if num = 4, then your program should return (4 3 2 1) = 24.

const firstFactorial = (num) => {
    
    for (let counter = 1; counter <= num; counter ++){
        num *= counter
    }
}

let num = 4
firstFactorial(num)