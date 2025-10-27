// Link: https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
  const sum = s1 + s2 + s3
  const array = []

  array.push(s1, s2, s3)

  const average = sum / array.length

  if (average <= 100 && average>= 90) {
    return "A"

  } else if (average < 90 && average>= 80) {
    return "B"
    
  } else if (average < 80 && average >= 70) {
    return "C"

  } else if (average < 70 && average >= 60) {
    return "D"

  } else if (average < 60 && average >= 0) {
    return "F"
  }
}

console.log(getGrade(40, 74, 29))
