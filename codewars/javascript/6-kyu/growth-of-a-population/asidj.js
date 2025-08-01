// Link: https://www.codewars.com/kata/563b662a59afc2b5120000c6

function nbYear(p0, percent, aug, p) {
    let counter = 0

    while (p0 < p) {
        p0 += Math.floor(p0 * percent/100 + aug)
        counter++
    }

    return counter
}


console.log(nbYear(1500, 5, 100, 5000))