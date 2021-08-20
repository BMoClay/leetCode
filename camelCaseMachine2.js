const args = [["apple", "One"], ["Apple", "Two"], ["appLe", "thRee", "foUr"]]

const camelCase = (...args) => {
  let answer = ""

  for (i = 0; i < args.length; i++){
    let arrayStr = ""
    for (j = 0; j < args[i].length; j++){
      let currentWord = args[i][j].toLowerCase()
      if (j !== 0) {
        currentWord[0].toUpperCase()
      }
      arrayStr += currentWord
    }
    (i === args.length - 1) ? answer += arrayStr : answer += `${arrayStr}` 
  }
}
console.log(camelCase(args))