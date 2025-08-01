// Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x){
    const alphabet = "abcdefghijklmnopqrstuvwxyz".toLowerCase().split("")
    let groups = []
    let currentGroup = []
        
    for (let i = 0; i < x.length; i++) {   
        if (x[i] === " ") {

            if (currentGroup.length > 0) {
                groups.push(currentGroup)
                currentGroup = []
            } 

        } else if (alphabet.includes(x[i])) {
            currentGroup.push(alphabet.indexOf(x[i]) + 1)
        }
    }

    if (currentGroup.length > 0) {
        groups.push(currentGroup)
    }

    const sums = groups.map(group => group.reduce((acc, currValue) => acc + currValue, 0))
    const maxIndex = sums.indexOf(Math.max(...sums))
    const words = x.split(" ")

    return words[maxIndex]
}

console.log(high("abad aasdo"))