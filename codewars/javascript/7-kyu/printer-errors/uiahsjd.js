// Link: https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
    const chars ="abcdefghijklm"
    let error = ""

    for (let i = 0; i < s.length; i++) {

        if (chars.includes(s[i])) {
            continue

        } else {
            error += s[i]
        } 
    }
    return `${error.length}/${s.length}`
}

console.log(printerError("aaabbbbhaijjjm"))