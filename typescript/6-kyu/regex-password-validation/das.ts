// Link: https://www.codewars.com/kata/52e1476c8147a7547a000811
export const REGEXP = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])^[a-zA-Z0-9]{6,}$/;

const str = "^fjd3IR9.";
console.log(REGEXP.test(str));