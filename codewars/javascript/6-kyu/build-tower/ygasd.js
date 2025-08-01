// Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
    const tower = []

    for (let i = 0; i < nFloors; i++) {
        let spaces = nFloors - i - 1
        let stars = 2 * i + 1 

        tower.push(" ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces))
    }

    return tower
}

console.log(towerBuilder(3))