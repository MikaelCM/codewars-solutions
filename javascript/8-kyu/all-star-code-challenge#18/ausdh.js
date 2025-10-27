// Link: https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter){  
    const obj = {}
    obj[letter] = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            obj[letter]++
        }
    }
    return obj[letter]
}

console.log(strCount("Hello", "l"))