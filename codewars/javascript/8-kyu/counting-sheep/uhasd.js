// Link: https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(sheep) {
  if (sheep === null || sheep === undefined) {
    return "ERROR"
  }

  return sheep.filter(Boolean).length
}

console.log(countSheeps([true, false, false, true, false, false, false, false, true, false, true, false, true]))