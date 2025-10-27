// Link: https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let total = 0

  for(let i = 0; i < games.length; i++) {
    const [x, y] = games[i].split(":").map(Number)
  
    if (x > y) {
      total += 3

    } else if (x === y) {
      total += 1

    }
  }

  return total
}

console.log(points(["1:1", "4:4", "2:1", "3:1", "0:1", "1:2", "4:2", "4:1", "2:0", "0:0"]))