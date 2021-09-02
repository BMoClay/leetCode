const isValid = (str) => {
    const parenthesisObj = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    let stack = []

    for (let i = 0; i < str.length; i++){
        let parethesis = str[i]
        let currentVal = parenthesisObj[parethesis]
        let lastStackItem = stack[stack.length - 1]
        
        if (parethesis === "{" || parethesis === "[" || parethesis === "(") {
            stack.push(currentVal)
        } else if (stack !== 0 && parethesis === lastStackItem){
            stack.pop()
        } else {
            return false
        }
    }
 
    return (!stack.length)

}
let str = "{())}"
console.log(isValid(str))