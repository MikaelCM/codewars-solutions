// Link: https://www.codewars.com/kata/53dc54212259ed3d4f00071c

function sum(numbers) {
    const sumArray = numbers.reduce((acc, num) => acc + num, 0)
    
    return sumArray
}

console.log(sum([1, 5.2, 4, 0, -1]))