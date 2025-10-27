// Link: https://www.codewars.com/kata/57a0885cbb9944e24c00008e

function removeExclamationMarks(s) {
  let newS = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!") {
      continue
      
    } else {
      newS += s[i]
    }
  }
  return newS
}

console.log(removeExclamationMarks("hello, my name is Mikael!!"))