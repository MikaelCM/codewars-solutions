// Link: https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

function maxSequence(arr) {
    const newArr = [...arr]

    if (arr.every(n => n > 0)) {
        return newArr.reduce((acc, currValue) => acc + currValue, 0)

    } else if (arr.every(n => n < 0 || arr.length === 0)) {
        return 0

    } else {
        let currSum = 0
        let maxSum = 0
        let start = 0
        let bestStart = 0
        let bestEnd = 0

        for (let i = 0; i < arr.length; i++) {
            currSum += arr[i]

            if (currSum > maxSum) {
                maxSum = currSum
                bestStart = start
                bestEnd = i
            }

            if (currSum < 0) {
                currSum = 0
                start = i + 1
            }
        }
        const result = newArr.slice(bestStart, bestEnd + 1)
        return maxSum
    }
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))