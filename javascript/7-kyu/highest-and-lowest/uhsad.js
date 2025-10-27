// Link: https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
    const toNumber = numbers.split(" ").map(n => Number(n))
    const max = Math.max(...toNumber)
    const min = Math.min(...toNumber)
    return `${max} ${min}`
}