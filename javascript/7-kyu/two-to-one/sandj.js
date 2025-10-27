function longest(s1, s2) {
    let s1Sorted = ""
    let s2Sorted = ""
    let sumStrings = ""

    for (let i = 0; i < s1.length; i++) {

        if (s1Sorted.includes(s1[i])) {
            s1[i + 1]

        } else {
            s1Sorted += s1[i]

        }
    }
    
    for (let i = 0; i < s2.length; i++) {

        if (s2Sorted.includes(s2[i])) {
            s2[i + 1]

        } else {
            s2Sorted += s2[i]

        }
    }

    s1Sorted = s1Sorted.split("").sort().join("")
    s2Sorted = s2Sorted.split("").sort().join("")
    
    for (let i = 0; i < s2.length; i++) {

        if (s1Sorted.includes(s2[i])) {
            s2[i + 1]

        } else {
            s1Sorted += s2[i]

        }
    }
    
    return s1Sorted.split("").sort().join("")
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))