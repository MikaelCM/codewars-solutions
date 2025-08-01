// Link: https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
    const result = {}

    for (let i = 0; i < string.length; i++) {
        if (result[string[i]]) {
            result[string[i]]++

        } else {
            result[string[i]] = 1
        }
    }
    
    if (result.length === 0) {
        return {}

    } else {
        return result
    }
}

console.log(count("aba"))