/*Have the function FirstFactorial(num) take the num parameter being passed 
and return the factorial of it. For example: if num = 4, 
then your program should return (4 3 2 1) = 24.

how do we find the factorial number
create a variable to store running total
get each number with a for loop that iterates until the we reach that specific number
in the for loop were going to multiply the current total by the current number
*/

const firstFactorial = (num) => {

  let total = 1;

  for (let i = 2; i <= num; i++) {
    total *= i
  }
  return total
}

console.log(firstFactorial(3));