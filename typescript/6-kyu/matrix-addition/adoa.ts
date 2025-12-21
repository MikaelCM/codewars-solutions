// Link: https://www.codewars.com/kata/526233aefd4764272800036f

type matrix = number[][];

export function matrixAddition(a: matrix, b: matrix): matrix {
    const storageA: number[] = [];
    const storageB: number[] = [];
    let sum: number[] = [];
    const result: matrix = [];
    const numbersLength = a[0].length;

    for (const arr of a) {
        for (const num of arr) {
            storageA.push(num);
        };
    };

    for (const arr of b) {
        for (const num of arr) {
            storageB.push(num);
        };
    };

    for (let i = 0; i <= storageB.length; i++) {
        if (sum.length === numbersLength) {
            result.push(sum);
            sum = [];
        };

        sum.push(storageA[i] + storageB[i]);
    };

    return result;
};

console.log(matrixAddition(
    [
        [1, 2, 3],
        [3, 2, 1],
        [1, 1, 1],
    ],
    [
        [2, 2, 1],
        [3, 2, 3],
        [1, 1, 3],
    ]
));