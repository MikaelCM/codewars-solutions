//link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
    string = string.toLowerCase()
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    
    for (let char of alphabet) {
        if (!string.includes(char)) {
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))