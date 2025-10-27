// Link: https://www.codewars.com/kata/5aa736a455f906981800360d

function feast(beast, dish) {
    beast = beast.toLowerCase()
    dish = dish.toLowerCase()
    const beastStart = beast.split("").slice(0, 1).join()
    const beastEnd = beast.split("").slice(-1).join()
    const dishStart = dish.split("").slice(0, 1).join()
    const dishEnd = dish.split("").slice(-1).join()
    
    if (dishStart === beastStart && dishEnd === beastEnd) {
        return true
    } else {
        return false
    }
}

console.log(feast("great blue heron", "garlic naan"))