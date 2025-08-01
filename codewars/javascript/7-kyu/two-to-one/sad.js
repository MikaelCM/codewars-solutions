// Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
    let newStringS1 = ""
    let newStringS2 = ""

    for (let i = 0; i < s1.length; i++) {

        if (newStringS1.includes(s1[i])) {
            s1[i + 1]

        } else {
            newStringS1 += s1[i]

        }
    }

    const s1Rearranged = newStringS1.split("").sort().join("")

    for (let i = 0; i < s2.length; i++) {

        if (newStringS2.includes(s2[i])) {
            s2[i + 1]

        } else {
            newStringS2 += s2[i]

        }
    }

    const s2Rearranged = newStringS2.split("").sort().join("")
    let unitedStrings = s1Rearranged

    for (let i = 0; i < s2Rearranged.length; i++) {
        
        if (unitedStrings.includes(s2Rearranged[i])) {
            s2Rearranged[i + 1]

        } else {
            unitedStrings += s2Rearranged[i]

        }
    }

    return unitedStrings.split("").sort().join("")
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))