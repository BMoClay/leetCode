const needleInHaystack = (needle, haystack) => {

    if (needle === "") return 0;

    if (haystack.includes(needle)) {
        return haystack.indexOf(needle)
    }

    return -1
}

const needle = "ll"
const haystack = "hello"
console.log(needleInHaystack(needle, haystack))