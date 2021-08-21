const avePair = (arr,avg) => {

    for (let i =0; i < arr.length - 1; i++){
        let currentSum = arr[i] + arr[i+1]
        
        if(currentSum%avg === 1) {
            return true
        }
    }
    let are = [1, 2, 3, 4]
    console.log(typeof are)
    return false
}

console.log(avePair([1,3,3,5], 8))