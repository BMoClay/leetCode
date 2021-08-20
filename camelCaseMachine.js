const camelCase = (...args) => {
    let answer = ""

    for (let i = 0; i < args.length;i++){
        let arrayStr = ""

        for (let j = 0; j < args[i].length; j++){
            // console.log(args[i][j])
            let currentWord = args[i][j]
            console.log(currentWord)
       // let currentWord = args[j].toLowerCase()
         // console.log(currentWord)
            if (j !== 0 ){
                //console.log(currentWord)
                currentWord[0].toUpperCase()
            }
            arrayStr += currentWord
        }
        (i === args.length - 1) ? answer += arrayStr : answer += `${arrayStr}`
    }
    return answer
}

const args = [["apple", "One"], ["Apple", "TWO"], ["appLe", "thRee", "FOUR"]]

let res = "appleOne appleTwo appleThreeFour"
console.log(camelCase(args))