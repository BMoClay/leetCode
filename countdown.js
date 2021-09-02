const countdown = (num) => {
    if (num <= 0) {
        console.log("all done")
        return
    }

    console.log(num)
    num --
    countdown(num)
}
const num = 4
console.log(countdown(num))