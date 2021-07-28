const mySqr = (x) => {
    let i = 0
    while (i*i < x) i++;
    if (x*x != x) i--;
    return i
}

const x = 8
console.log(mySqr(x))