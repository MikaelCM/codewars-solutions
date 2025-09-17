// Link: https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(phrase) {
    const split = phrase.split(" ")
    let words = ""

    for (let i = 0; i < split.length; i++) {
        if (split[i].length >= 5) {
            words += split[i].split("").reverse().join("")

        } else {
            words += split[i]
        }

        if (i < split.length - 1) {
            words += " "
        }
    }
    return words
}