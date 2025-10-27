// Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
    let counter = 0

    while (num >= 10) {
        num = num.toString().split("").reduce((acc, currValue) => acc * currValue)
        counter++
    }

    return counter
}

console.log(persistence(39))