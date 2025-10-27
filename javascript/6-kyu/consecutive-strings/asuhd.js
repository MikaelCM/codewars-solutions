// Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
    if (k < 1) {
        return ""
    }

    let concatenatedWords = []

    for (let i = 0; i <= strarr.length - k; i++) {
        let group = strarr.slice(i, i + k).join("")
        concatenatedWords.push(group)
    }

    let biggestWord = ""

    for (let i = 0; i < concatenatedWords.length; i++) {
        if (concatenatedWords[i].length > biggestWord.length) {
            biggestWord = concatenatedWords[i]
        }
    }
    
    return biggestWord
}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))