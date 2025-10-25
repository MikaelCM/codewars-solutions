// Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
  let i = 0
  let even = []
  let odd = []

  while (i < integers.length) {

    if (integers[i] % 2 === 0) {
      even.push(integers[i])

    } else {
      odd.push(integers[i])
    }

    i++
  }

  if (even.length === 1) {
    return even[0]

  } else {
    return odd[0]
  }
}