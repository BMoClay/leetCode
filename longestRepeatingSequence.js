// 4- given an array of integers find the number with longest repeating sequence.
//     findMostRepeated([2,6,6,6,1,1,2,2,1,1,1,1,1,4,4,4,4,6,4,4,4,1,4,4]) = 1

// const longestRepeatingSequence = (array) => {
//     let allSequences = {}

//     let temporaryArray = []

//     for (let number of array){
//         if (number in allSequences) {

//         }
//     }
//     console.log(array)
// }

// let array = [2,6,6,6,1,1,2,2,1,1,1,1,1,4,4,4,4,6,4,4,4,1,4,4]
// longestRepeatingSequence(array)

// const array = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
// const findLongestSequence = (array) => {

//    const result = array.reduce((accumulator,value,index) => {
//        console.log(value)
//     if (accumulator.length && accumulator[accumulator.length-1][0] === value){
//          accumulator[accumulator.length-1].push(value);
//       }else{
//          accumulator.push([value]);
//       };
//       return accumulator;
//    },[]).reduce((accumulator, value) => {
//       return value.length > accumulator.length ? value : accumulator;
//    }); return result.length;
// }
// console.log(findLongestSequence(array));



// const streak = (array) => {
//     var i,
//         temp,
//         streak,
//         streakNumber,
//         length = array.length,
//         highestStreak = 0;

//     for(i = 0; i < length; i++) {
//         // check the value of the current entry against the last
//         if(temp != '' && temp == array[i]) {
//             // it's a match
//             streak++;
//         } else {
//             // it's not a match, start streak from 1
//             streak = 1;
//         }

//         // set current letter for next time
//         temp = array[i];

//         // set the master streak var
//         if(streak > highestStreak) {
//             highestStreak = streak;
//             console.log(`end of function temp ${temp}`)
//         }
//     }
// console.log(`last temp ${temp}`)
//     return highestStreak;
// }

// var array = [2,5,3,1,1,1,3,7,9,6,4,1,1,1,1,1,4,7,2,3,1,1,4,3];

// console.log(streak(array)); // 5



const longestRepeatingSequence = (array) => {
    let firstCounter;
    let secondCounter = 0;

    for (let i = 0; i < array.length; i ++) {
        firstCounter = i;
        console.log(firstCounter)
        for (let j = array[array.length - 1 - i]; j < array.length; j ++) {
            if (firstCounter === array[j]) {
                console.log(true)
                console.log(firstCounter)
                console.log(array[j])
            } else {
                console.log(false)
            }
        }
    }
}

var array = [2,5,3,1,1,1,3,7,9,6,4,1,1,1,1,1,4,7,2,3,1,1,4,3];
longestRepeatingSequence(array)