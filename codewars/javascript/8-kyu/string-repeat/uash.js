// Link: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
  let array = []
  
  
  for(let i = 1; i <= n; i++) {
    array.push(s)
  }
  
  return s.repeat(n);
}

console.log(repeatStr(5, "Hello"))