// Link: https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    let charX = ""
    let charO = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i].includes("x") || str[i].includes("X")) {
            charX += str[i]

        } else if (str[i].includes("o") || str[i].includes("O")) {
            charO += str[i]
            
        }
    }

    if (charX.length == charO.length) {
        return true

    } else {
        return false

    }

}

console.log(XO("YnTxahokOUGKOnUTeOFdGXXUPpDX"))