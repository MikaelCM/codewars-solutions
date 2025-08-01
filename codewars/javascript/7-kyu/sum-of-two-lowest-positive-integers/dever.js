// Link: https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {  
  const arrayMinNum1 = numbers.sort((a, b) => a - b).slice(0, 1)
  const arrayMinNum2 = numbers.sort((a, b) => a - b).slice(1, 2)
  const minNum1 = Number(arrayMinNum1)
  const minNum2 = Number(arrayMinNum2)
  const sum = minNum1 + minNum2

  return sum
}

console.log(sumTwoSmallestNumbers([1000, 50, 90, 20]))