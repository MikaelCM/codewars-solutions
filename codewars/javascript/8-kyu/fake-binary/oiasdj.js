// Link: https://www.codewars.com/kata/57eae65a4321032ce000002d

const fakeBin = x => x.split("").map(n => n >= 5 ? "1" : "0").join("")

console.log(fakeBin("5210137"))