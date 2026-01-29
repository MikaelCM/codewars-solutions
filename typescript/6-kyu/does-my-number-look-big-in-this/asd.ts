// Link: https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value: number): boolean {
    const valueSplit = value.toString().split("").map(Number);
    const valuePower = valueSplit.map(n => Math.pow(n, valueSplit.length));
    const result = valuePower.reduce((acc, curr) => acc + curr, 0);

    return result === value ? true : false;
};

console.log(narcissistic(153)); // True porque o resultado é igual ao parâmetro 