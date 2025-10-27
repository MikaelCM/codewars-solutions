// Link: https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
  const squareRoot = Math.sqrt(sq)

  if (Number.isInteger(squareRoot)) {
    return (squareRoot + 1) ** 2
    
  } else {
    return false
    
  }
}

console.log(findNextSquare(36))