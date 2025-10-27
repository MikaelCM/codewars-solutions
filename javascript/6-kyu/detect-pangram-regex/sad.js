// Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

const isPangram = string => new Set(string.toLowerCase().match(/\w/g)).size === 26 

console.log(isPangram("The quick brown fox jumps over the lazy dog"))