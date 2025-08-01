// Link: https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
    let result = ""

    for (const char of string) {

        if (char === char.toUpperCase()) {
            result += " " + char

        } else {
            result += char

        }
    }

    return result
}

console.log(solution("camelCasing"))