
// *Write a function to represent Floyd Triangle, given input is the 
// number of rows of the Floyd triangle
// Example if the number of rows is 3
// Result:
// 1
// 2 3
// 4 5 6 
// 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20 21


const floydTriangle = (input) => {
    let num = 0
    let string = ""

    for (let i = 1; i <= input; i++) {
        // console.log(`first for loop: i: ${i}`)
        // console.log(`first for loop: num: ${num}`)
        // console.log(`first for loop: string: ${string}`)
        for (let j = 1; j <= i; j++) {
            string += ++ num        
            // console.log(`second for loop: num: ${num}`)
            // console.log(`second for loop: i: ${i}`)
            // console.log(`second for loop: j: ${j}`)
            // console.log(`second for loop: string: ${string}`)
            // console.log(" ")
            string += j === i ? "\n" : " "
        }   
    }
    return string
}
console.log(floydTriangle(4))