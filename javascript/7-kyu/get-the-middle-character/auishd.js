// Link: https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  const length = s.length
  
  if (length % 2 === 0) {
    const mid1 = length / 2 - 1
    const mid2 = length / 2
    return s[mid1] + s[mid2]
    
  } else {
    const mid = Math.floor(length / 2)
    return s[mid]
  }
}

console.log(getMiddle("testing"))