// Link: https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
    let concatenatedWords = []

    for (let i = 0; i < strarr.length; i++) {
        concatenatedWords.push(strarr[i] + strarr[i + k - 1])
    }
    
    if (concatenatedWords.length > 1) {
        concatenatedWords.pop()
    }

    let biggestWord = ""

    for (let i = 0; i < concatenatedWords.length; i++) {
        if (concatenatedWords.length[i] > concatenatedWords.length[i + 1]) {
            biggestWord = concatenatedWords[i]
        }
    }

    return biggestWord
}

console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))