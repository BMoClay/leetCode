/* Program to print elements of a string present 
on ODD position, along with the count of those elements 
in the entire string
i.e abbloseckc - b:2,l:1,s:1,c:2 

create an object to store counts
create a set (a set is an object w no values (just keys))
first count every character in the string
find if index is odd
if index is odd store the character in oddCharacterSet 
and increment in the object or create if doesnt exist
else just increment or create
iterate over the set
and print the corresponding values from the obj
*/

const oddPosition = (str) => {
    const oddCharacters = new Set();
    const count = {};

    for (let i = 0; i < str.length; i++) {
        if (str[i] in count) {
            count[str[i]] += 1
        } else {
            count[str[i]] = 1
        }
        if (i % 2 !== 0) 
            oddCharacters.add(str[i])
        }
    }
    
    for (const char of oddCharacters) {
        console.log(`${char}:${count[char]}`)
    }
}
let str = 'abbloseckc'
oddPosition('abbloseckc')