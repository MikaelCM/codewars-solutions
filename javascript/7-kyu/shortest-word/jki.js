// Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

const findShort = s => typeof Number(s.split(" ").map(stringLength => stringLength.length).sort((a, b) => a - b).slice(0, 1))

console.log(findShort("Let's travel abroad shall we"))