// Link: https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    let result = []

    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            result.push(a[i])

        } else {
            result.push()
        }
    }
    return result
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))