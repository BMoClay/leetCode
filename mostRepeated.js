// 3- given an array of integers find the most repeated number.
//     findMostRepeated([2,6,6,6,1,1,2,2,1,1,1,1,1,4,4,4,4,6,4,4,4,1,4,4]) = 4

const mostRepeated = (array) => {

   let numberHash = {}

   for (let number of array) {
        if (number in numberHash) {
            numberHash[number] += 1
        } else {
            numberHash[number] = 1
        }
   }

   let result = Object.keys(numberHash).reduce(function(a, b){ 
    console.log(Object.keys(numberHash))
    console.log(numberHash)
    console.log(`Hash A:${numberHash[a]}`)
    console.log(`Hash B:${numberHash[b]}`)
    return numberHash[a] > numberHash[b] ? a : b 
});

 console.log(result)
};


let array = [2,6,6,6,1,1,2,2,1,1,1,1,1,4,4,4,4,6,4,4,4,1,4,4]
mostRepeated(array)

/* 
create variable result = 0
create second empty variable secondresult
for loop
if array[i] is greater than result
array[i].push(result)
if result.length < secondresult
then result = secondresult
return result
*/