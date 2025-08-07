//link: https://www.codewars.com/kata/5ab6538b379d20ad880000ab

function areaOrPerimeter(l, w) {
    if (l === w) {
        return l * w

    } else {
        const lenMultiplied = l * 2
        const widMultiplied = w * 2
        return lenMultiplied + widMultiplied
    }
}

console.log(areaOrPerimeter(6, 10))