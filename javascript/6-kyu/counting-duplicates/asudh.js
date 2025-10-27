// Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
    text = text.toLowerCase()
    let seen = ""
    let duplicated = ""

    for(let i = 0; i < text.length; i++) {

        if (seen.includes(text[i]) && !duplicated.includes(text[i])) {
            duplicated += text[i]

        } else if (!seen.includes(text[i])) {
            seen += text[i]
            
        }

    }

    return duplicated.length
}

console.log(duplicateCount("aaaaaaaabbb11"))