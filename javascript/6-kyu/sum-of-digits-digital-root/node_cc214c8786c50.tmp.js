// Link: https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
    const nConverted = n.toString().split("").map(n => Number(n))

    while (nConverted.length > 1) {
        nConverted.reduce((acc, currValue) => acc + currValue)
    }

    return nConverted
}

console.log(digitalRoot(132189))