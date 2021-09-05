const search = (array,val) => {

    let min = 0
    let max = array.length -1

    while (min <= max){
        let middle = Math.floor((min + max)/2)
        console.log(`while middle:`, middle)
        if (array[middle] > val){
            max = middle - 1
            console.log(`if max:`, max, `middle:`, middle)
        } else if (array[middle] < val) {
            min = middle + 1
            console.log(`else if min:`, min,`middle:`, middle)
        } else return true
    }
    

}

const array = [1,6,7,8,9,10,11]
const val = 5
console.log(search(array,val))