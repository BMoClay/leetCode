/* Write a function to represent Floyd Triangle,
given the input is the number of rows of the Floyd Triangle
Example if the number of rows is 4

Result

1
2 3
4 5 6
7 8 9 10


the minimum amount of rows is 1? if input is 0 return 0 otherwise do the function/// would negative numbers work as inputs?
the numbers increment by one starting at 1
the number of row it is is equal to the amount of numbers it contains
the number each row starts out on after the first row is exactly 1 higher than the last number of the preceding row
stop the loop once the number of rows created equals the input number

*/

const floydT = (rows) => {

    let highNumInRowTracker = Array(rows);
    let number = 0
    highNumInRowTracker.fill(0) 

    for (let i = 0; i < rows; i++){
        console.log(i)
        let rowCount = i +1
        highNumInRowTracker[i] = rowCount 
    }

    console.log(highNumInRowTracker)
    return "end"
}
let rows = 4
console.log(floydT(rows))