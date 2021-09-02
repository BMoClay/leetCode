const sumRange = (n) => {
    if (n === 1) return 1
    return n + sumRange(n -1)
}

const sumRange = (4) => {
    if (n === 1) return 1
    return 4 + sumRange(3)
}

callstack = return 4 + sumRange(3)
10
const sumRange = (3) => {
    if (n === 1) return 1
    return 3 + sumRange(2)
}

callstack = return 3 + sumRange(2)
6
const sumRange = (2) => {
    if (n === 1) return 1
    return 2 + sumRange(1)
}

callstack = return 2 + sumRange(1)
3

const sumRange = (1) => {
    if (n === 1) return 1
    return 1 + sumRange(1)
}

sumRange(1) callstack = return 1 
sumRange(2) callstack = return 3
sumRange(3) callstack = return 6
sumRange(4) callstack = return 10

console.log(sumRange(n))