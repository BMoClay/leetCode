const isValid = (str) => {
    let stack = [];
    let bracketObj = {")":"(", "}":"{", "]":"["}
    
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        let lastChar = stack[stack.length - 1]

        if (currentChar === "(" || currentChar === "[" || currentChar === "{"){
            stack.push(currentChar)
        } else if (stack[stack.length -1] === bracketObj[currentChar]){
            stack.pop()
        } else return false
    }

    return stack.length ? false : true
}
let str = "({})"
console.log(isValid(str))