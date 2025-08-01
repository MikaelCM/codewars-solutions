// Link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2

function findSmallestInt(arr) {
  const smallest = Math.min(...arr)
  
  return smallest
}

console.log(findSmallestInt([8, 5, 3, 7, 6]))