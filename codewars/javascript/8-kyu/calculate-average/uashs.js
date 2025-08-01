// Link: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function findAverage(array) {
  if (array.length == 0) {
    return 0
    
  } else {
      let sum = 0

      for(let i = 0; i < array.length; i++) {
        sum += array[i]
      }

      const average = sum / array.length
      return average
  }
}

console.log(findAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))