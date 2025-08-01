// Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

const duplicateCount = text => (text.toLowerCase().split('').sort().join('').match(/(\w)\1+/g) || []).length;

console.log(duplicateCount("aAbbcdef"))