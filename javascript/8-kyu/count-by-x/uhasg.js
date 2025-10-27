// Link: https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x = 1, n = 10) { 
  let z = []
  
  for(let i = 1; i <= n; i++) {
    z.push(x * i)
  }
  return z
}

console.log(countBy(2, 5))