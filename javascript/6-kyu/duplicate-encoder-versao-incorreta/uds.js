function duplicateEncode(word) {
    word = word.toLowerCase()
    let toParetheses = ""

  for (let i = 0; i < word.length; i++) {
    let revisor = ""
    revisor += word[i]

    if (word.includes(word[i]) > 1) {
        toParetheses += ")"

    } else {
        toParetheses += "("

    }
  }
  return toParetheses
}

console.log(duplicateEncode("Success"))