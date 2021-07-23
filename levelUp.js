function numPlayers(k, scores) {
    let rankingObj = {}
    let sortedScores = scores.sort((a,b)=>b-a)
    let result = 0

    for (let i=1; i<scores.length+1; i++){
        if (scores[i] > scores[i+1]){
            rankingObj[i] = sortedScores[i]
            console.log(scores[i])
        }
    } 
//    return result
}

const k = 3
const scores = [100,50,25,25]
console.log(numPlayers(k,scores))