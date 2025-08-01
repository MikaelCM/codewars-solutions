// Link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
    let sum = 0
    let counter = 0
    let n = 1

    while (sum < m) {
        sum += n**3
        n++
        counter++ 
    }

    if (sum === m) {
        return counter

    } else {
        return -1
    }
}

console.log(findNb(1071225))