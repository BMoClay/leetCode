//given an array of sorted integers and a target value
//return where in array the target value is (its index value)
const search = (array,val) => {

    let min = 0
    let max = array.length - 1;
    
    while (min <= max){
        let middle = Math.floor((min + max)/2);
        let currentMiddleEle = array[middle];
        console.log(`while     (min <= max)          `,`min:`, min, `max:`, max, `middle:`, middle, `currentMiddleEle:`, currentMiddleEle)
        if (currentMiddleEle < val) {
            min = middle + 1
            console.log(`if      (currentMiddleEle < val)`,`min:`, min, `max:`, max, `middle:`, middle, `currentMiddleEle:`, currentMiddleEle)
        } else if (currentMiddleEle > val) {
            max = middle - 1;
            console.log(`else if (curr entMiddleEle > val)`,`min:`, min, `max:`, max, `middle:`, middle, `currentMiddleEle:`, currentMiddleEle)
        } else return middle
    }
    return false
}

const array = [1,6,7,8,9,10,11]
const val = 5
console.log(search(array,val))