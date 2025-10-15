// Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    const vowels = "aeiou"
    let counter = 0

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            counter++
        }
    }
    return counter
}