// Link: https://www.codewars.com/kata/546f922b54af40e1e90001da

const alphabetPosition = text => text.toLowerCase().split("").filter(char => /[a-z]/.test(char)).map(char => char.charCodeAt(0) - 96).join(" ")

console.log(alphabetPosition("The sunset sets at twelve o' clock."))