// Link: https://www.codewars.com/kata/51b62bf6a9c58071c600001b

export function solution(number: number): string {

    if (number < 4000 && number > 0) {
        const romanDigits: Record<string, number> = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1,
        };

        const result: string[] = [];

        for (const key in romanDigits) {

            while (number >= romanDigits[key]) {
                result.push(key);
                number -= romanDigits[key];
            };
        }

        return result.join("")

    } else {
        return "Invalid number";
    };
};

console.log(solution(2100));