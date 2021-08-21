const camelCase = (...args) => {

    let result = ""
    let theArgs = args[0]

    for (let i = 0; i < theArgs.length;i++){
        let arrayStr = ""
        let thisLine = theArgs[i]
        let endOfLine = thisLine.length -1
       
        for (let j = 0; j < thisLine.length; j++){
            let currentWord = thisLine[j].toString().toLowerCase()
            if (j !== 0){
                currentWord = currentWord[0].toUpperCase() + currentWord.slice(1)
            }
            if (j == endOfLine){
                arrayStr += currentWord + " "
            } else {
                arrayStr += currentWord
            }
        }
            (i === args.length - 1) ? result += arrayStr : result += `${arrayStr}`
        }
    return result
}



const args = [["apple", "One"], ["Apple", "TWO"], ["appLe", "thRee", "FOUR"], ["bapple"]]

let res = "appleOne appleTwo appleThreeFour"
console.log(camelCase(args))