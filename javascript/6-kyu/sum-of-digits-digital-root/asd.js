// Link: https://www.codewars.com/kata/541c8630095125aba6000c00

const digitalRoot = n => n > 9 ? digitalRoot(n.toString().split("").map(n => Number(n)).reduce((acc, currValue) => acc + currValue)) : n

console.log(digitalRoot(132189))