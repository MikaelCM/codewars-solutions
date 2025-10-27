// Link: https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
    let rent = 0
    let discount = 0
    let result = 0

    for (let i = 1; i <= d; i++) {
        if (i >= 7) {
            discount = 50
            rent += 40
            result = rent - discount

        } else if (i >= 3) {
            discount = 20
            rent += 40
            result = rent - discount

        } else {
            rent += 40
            result = rent
        }
    }

    return result
}

console.log(rentalCarCost(5))