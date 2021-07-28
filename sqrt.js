const mySqr = (x) => {
    let i = 0
    while (i*i < x) i++;
    if (i*i != x) i--;
    return i
}

const x = 8
console.log(mySqr(x))