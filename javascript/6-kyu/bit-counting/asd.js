// Link: https://www.codewars.com/kata/526571aae218b8ee490006f4

function countBits(n) {
    const toBinary = n.toString(2)
    let ones = ""

    for (let i = 0; i < toBinary.length; i++) {
        if (toBinary[i] === "1") {
            ones += toBinary[i]
        }
    }

    return ones.length
}