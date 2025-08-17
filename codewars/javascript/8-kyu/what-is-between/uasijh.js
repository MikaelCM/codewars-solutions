// Link: https://www.codewars.com/kata/55ecd718f46fba02e5000029

function between(a, b) {
    const result = []

    for (let i = a; i <= b; i++) {
        result.push(i)
    }
    return result
}

console.log(between(1, 4))