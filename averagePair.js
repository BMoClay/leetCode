const averagePair = (arr, n) => {
    
    let firstIndex = 0
    let lastIndex = arr.length - 1
    
    console.log(`before the while loop ------->`,`firstIndex:`, firstIndex, `lastIndex:` , lastIndex, `arr[firstIndex]:`, arr[firstIndex], `arr[lastIndex]:`, arr[lastIndex], `average:`, (arr[firstIndex] + arr[lastIndex])/2)
    
    while (firstIndex !== lastIndex){
        let average = (arr[firstIndex] + arr[lastIndex])/2
        console.log(`in the while loop top level ->`,`firstIndex:`, firstIndex, `lastIndex:` , lastIndex,`arr[firstIndex]:`, arr[firstIndex], `arr[lastIndex]:`, arr[lastIndex], `average:`, average)
        if (average > n){
            console.log("hit! (average > n) ----------> lastIndex --  (exit 'if' statement and go back to while validation)")
            lastIndex --
            // console.log(`end 'if (average > n)' ------>`,`firstIndex:`, firstIndex, `lastIndex:`, lastIndex, `arr[firstIndex]:`, arr[firstIndex], `arr[lastIndex]:`, arr[lastIndex])
        } else if (average < n){
            console.log("hit! (average < n) ----------> firstIndex ++ (exit 'else if' statement and go back to while validation)")
            firstIndex ++
            // console.log(`end 'else if (average < n)' ->`,`firstIndex:`, firstIndex, `lastIndex:`, lastIndex, `arr[firstIndex]:`, arr[firstIndex], `arr[lastIndex]:`, arr[lastIndex])
        } else if (average === n){
            console.log("hit! (average === n) --------> return true   (and stop running the loop)")
            return true
        }
    }
    return false
}

const arr = [1,3,3,5,6,7,10,12,19]
const n = 9
console.log(averagePair(arr,n))
//true