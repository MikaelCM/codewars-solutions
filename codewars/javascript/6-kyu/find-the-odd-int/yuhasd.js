// Link: https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
    if (A.length === 1) return A[0]
        
    let counter = {}

    for (let i = 0; i < A.length; i++) {
        if (!counter[A[i]]) {
            counter[A[i]] = 1

        } else {
            counter[A[i]]++
        }
    }
    
    for (let key in counter) {
        if (counter[key] % 2 === 0) {
            continue
        } 

        else {
            return Number(key)
        } 
    }
}

console.log(findOdd([0,1,0,1,0]))