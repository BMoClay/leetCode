//accepts array and number
// return the index where number is located

const binarySearch = () => {
    let min = 0
    let max = arr.length -1

    while (min <= max){
        let middle = Math.floor((min+max)/2)
        let currentNum = arr[middle]

        if (arr[middle] < n){
            min = middle + 1;
        } else if (arr[middle] > n){
            max = middle -1;
        } else {
            return middle
        }
    }

}
const n = 4
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
console.log(binarySearch(arr, n))