// Link: https://www.codewars.com/kata/5effa412233ac3002a9e471d

function add(num1: number, num2: number): number {
    const topNumbers: number[] = [num1].toString().split("").map(Number);
    const bottomNumbers: number[] = [num2].toString().split("").map(Number);

    // If topNumbers.length > bottomNumbers.length

    while (topNumbers.length > bottomNumbers.length) {
        bottomNumbers.unshift(0);
    };

    // else

    while (bottomNumbers.length > topNumbers.length) {
        topNumbers.unshift(0);
    };

    //

    let result: number[] = [];

    for (let i = 0; i < topNumbers.length; i++) {
        result.push((topNumbers[i] ?? 0) + (bottomNumbers[i] ?? 0));
    };

    return Number(result.join(""));
};


console.log(add(122,
                 81)); // 1 10 3