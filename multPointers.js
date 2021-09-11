console.time("ben code")
const countUniqueValues = (array) => {

    let current = 0
    let next = 1

    while (next < array.length) {
        if (array[current] === array[next]){
            next ++
        } else {
            array[current + 1] = array[next]
            current ++
        }
    }
   
    return current + 1
}

const array = [1,1,2,3,3,4,4,4,6,7,7,8,9]
console.log(countUniqueValues(array))
console.timeEnd("ben code")