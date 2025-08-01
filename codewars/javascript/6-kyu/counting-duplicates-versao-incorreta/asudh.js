// Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
    let accumulatorOfText = ""
    let repeatedCharacters = ""

    for (let i = 0; i < text.length; i++) {

        if (accumulatorOfText.includes(text[i].toLowerCase()) || accumulatorOfText.includes(text[i].toUpperCase())) {
            
            repeatedCharacters += accumulatorOfText + text[i]

            for (let i = 0; i < repeatedCharacters.length; i++) {

                if (repeatedCharacters[i] === repeatedCharacters) {

                    return repeatedCharacters[i].length

                }
            }

        } else {
            accumulatorOfText += text[i]
            repeatedCharacters = ""
            
        }
    }
    return repeatedCharacters
}

console.log(duplicateCount("aabcde"))