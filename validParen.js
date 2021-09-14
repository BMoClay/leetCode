const validParenthesis = (s) => {

    const parenthesisObj = {
        "{":"}",
        "[":"]",
        "(":")"
    }
    
    let stack = []

    for (let i = 0; i < s.length; i++){
        let char = s[i]
        if (char === "{" || char === "[" || char === "(") {
            stack.push(parenthesisObj[char])
        } else if (char === stack[stack.length - 1]){
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length? false : true
}

const s = "(()"
console.log(validParenthesis(s))