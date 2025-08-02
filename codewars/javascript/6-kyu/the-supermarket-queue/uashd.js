// Link: https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
    const tills = Array(n).fill(0)

    if (n === 1) {
        return customers.reduce((acc, currValue) => acc + currValue, 0)

    } else if (n === 0) {
        return "ERROR"

    } else {
        for (let i = 0; i < customers.length; i++) {
            let indexShortestTill = tills.indexOf(Math.min(...tills))

            tills[indexShortestTill] += customers[i]
        }

        return Math.max(...tills)
    }
}

console.log(queueTime([10, 2, 3, 3], 2))