// Link: https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
    let sum = ""
    let slice = 0

    if (n === 0 || signature.length < 3) {
        return []

    } else if (n < 4) {
        return signature.slice(0, n)

    } else {
        
        for (let i = 0; signature.length < n; i++) {
            sum = signature.slice(-3).reduce((acc, currValue) => acc + currValue, 0)
            signature.push(sum)
        }

    }    
    
    return signature
}

console.log(tribonacci([1, 1, 1], 7))