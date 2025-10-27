// Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr, n) {
    indexesResult = []

    for (let i = 0; i < arr.length; i++) {
        let leftNumbers = arr.slice(0, i).reduce((acc, currValue) => acc + currValue, 0)
        let rightNumbers = arr.slice(i + 1).reduce((acc, currValue) => acc + currValue, 0)  
        
        if (leftNumbers === rightNumbers) {
            indexesResult.push(i)

        } else {
            continue

        }
    }

    if (indexesResult.length == []) {
        return -1

    }

    return Math.min(...indexesResult)
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))