// Link: https://www.codewars.com/kata/55d5da66a0e378b8bc0000c6

function getCharacters(obj, key, val) {
    const foundCharacters = [];
    let list = obj.characters
    
    for (let character of list) {

        if (key in character) {
            if (character[key].toLowerCase() === val.toLowerCase()) {
                foundCharacters.push(character)
            }
        }
    }

    return foundCharacters
}