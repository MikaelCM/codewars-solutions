// Link: https://www.codewars.com/kata/695688e9858d531c29a9d748

function detectBruteForce(logs: string[]): string[] {
    const ips: Record<string, number> = {};
    const result: string[] = [];

    for (const str of logs) {
        let ip = "";

        for (const char of str) {
            if (/[0-9.]/.test(char)) {
                ip += char;

            } else {
                break;
            };
        };

        if (str.includes("LOGIN_FAIL")) {
            ips[ip] = (ips[ip] ?? 0) + 1;

            if (ips[ip] === 3 && !result.includes(ip)) {
                result.push(ip);
            };

        } else if (str.includes(ip)) {
            ips[ip] = 0;
        };
    };

    return result.sort((a, b) => a.localeCompare(b));
};

console.log(detectBruteForce(
    [
        "1.1.1.1 LOGIN_FAIL user=a",
        "2.2.2.2 LOGIN_FAIL user=b",
        "1.1.1.1 LOGIN_FAIL user=a",
        "2.2.2.2 LOGIN_SUCCESS user=b",
        "1.1.1.1 LOGIN_FAIL user=a",
        "2.2.2.2 LOGIN_FAIL user=b"
    ]
));