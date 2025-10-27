// Link: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str){
    let array = []

    for (let i = 0; i < str.length; i++) {

        if (str[i] === " ") {
            continue
        }

        let copy = str.split("")
        copy[i] = copy[i].toUpperCase()
        array.push(copy.join(""))
        
    }

    if (array.length == 0) {
        return []
        
    } else {
        return array
    }
}

console.log(wave("hello world"))