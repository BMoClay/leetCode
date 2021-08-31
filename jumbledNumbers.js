const jumbledNumbers = (str) => {
// let letterFreqObj = {}


// for (let i = 0; i < str.length; i++){
//     let key = str[i]
//    if (!(key in letterFreqObj)){
//        letterFreqObj[key] = 1
//    } else {
//        letterFreqObj[key] += 1
//    }
// }

// console.log(letterFreqObj)


    let count = [0] * 10
    [0,0,0,0,0,0,0,0,0,0]
        //of[zeros,1s,twos,threes,fours,fives,sixes,sevens,eights,nines]
    for i in range(len(s)):
        l = s[ind]
        if l == 'z': count[0] += 1
        if l == 'w': count[2] += 1
        if l == 'u': count[4] += 1
        if l == 'x': count[6] += 1
        if l == 'g': count[8] += 1
            // need to make rules for below
        if l == 'o': count[1] += 1
        if l == 'h': count[3] += 1
        if l == 'v': count[5] += 1
        if l == 's': count[7] += 1
        if l == 'i': count[9] += 1

    count[7] = count[7] - count[6]
    count[3] = count[3] - count[8]
    count[5] = count[5] -count[7]

    count[1] = count[1] - count[0] - count[2] - count[4]
    count[9] = count[9]-count[5]-count[6] - count[8]
    print(count)
    ans = ''
    for i in range(10):
        j = 0
        while j < count[i]:
            print(count[i])
            print(i)
            ans += str(i)
            j += 1

    print(ans)



s = "owoztneoertwofive"
print(scrambledDigits(s))
}

const str = "reuonnoinfe"
let res = 149
console.log(jumbledNumbers(str))