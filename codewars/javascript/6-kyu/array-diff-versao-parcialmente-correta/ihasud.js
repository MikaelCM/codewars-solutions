// Link: https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
    let result = []

    for (let i = 0; i < a.length; i++) {
        result = a.filter(num => !b.includes(num))
    }
    
    return result
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))