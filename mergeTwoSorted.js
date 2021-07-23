/** PROBLEM 
 * Merge two sorted linked lists and return it as a sorted list. 
 * The list should be made by splicing together the nodes of the first two lists.

** PSEUDO CODE **

Understanding The Problem
given these two arrays how can i put them together where they return
the numbers in ascending order in a single new array

Explore Examples


Break It Down

 */

const mergeTwoSorted = (l1, l2) => {
    let newArr = [];
    // l1.push(l2)
    // newArr.push(l1[0], l2[0])
    // newArr.push(l1)

    for (let i = 0; i < l2.length; i++) {
        l1.push(l2[i])
        l2.shift(i, 0)
        // else if (l1[i] > l2[i]) {
            
        // }
    }

    console.log(l1)
}

const l1 = [1,2,4]
const l2 = [1,3,4]
mergeTwoSorted(l1,l2)