function solution(number){
    if (number < 0) {
        return 0

    } else {
        let multiplier = 0
        const sum = []

        for (let i = 1; i < 10; i++) {
            multiplier = i * number

            if (multiplier >= 0 && multiplier < 10 && Number.isInteger(multiplier)) {
                sum.push(multiplier)
            }
        }
        return sum.reduce((acc, currValue) => acc + currValue, 0)
    }
}

console.log(solution(3))