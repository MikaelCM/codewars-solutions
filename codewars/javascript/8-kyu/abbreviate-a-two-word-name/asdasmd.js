// Link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
    const firstLetter = name[0].toUpperCase()
    let secondLetter = ""
    
    for (let i = 0; i < name.length; i++) {

        if (name[i] == " ") {
            secondLetter = name[i + 1].toUpperCase()
            return firstLetter + "." + secondLetter

        } 
    }
}

console.log(abbrevName("sam warris"))