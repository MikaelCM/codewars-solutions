// Link: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    const sumPositives = arr.reduce((acc, actValue, index) => {

        if (actValue <= 0) {
            actValue[index + 1]
            return acc

        } else {
            return acc += actValue

        }
    }, 0)
    
    return sumPositives
}

console.log(positiveSum([1, -4, 7, 12]))