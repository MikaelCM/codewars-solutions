// Link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
    let oddNumbers = array.filter(n => n % 2 !== 0).sort((a, b) => a - b)
    let oddIndex = 0

    return array.map(n => {
        if (n % 2 !== 0) {
            return oddNumbers[oddIndex++]

        } else {
            return n

        }
    })
}

console.log(sortArray([5, 8, 6, 3, 4]))