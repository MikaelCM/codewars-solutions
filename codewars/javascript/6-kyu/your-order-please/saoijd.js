// Link: https://www.codewars.com/kata/525f50e3b73515a6db000b83

function order(words){
    if (!words) return ""

    function getNumber(word) {
        for (let char of word) {
            if (!isNaN(char)) {
                return Number(char)
            }
        }
    }
    
    return words.split(" ").sort((a, b) => getNumber(a) - getNumber(b)).join(" ")
}

console.log(order("is2 Thi1s T4est 3a"))