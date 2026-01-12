function detectBruteForce(logs: string[]): string[] {
    const ipTest: string[] = [];
    const result: string[] = [];

    logs.forEach(str => {
        if (str.includes("LOGIN_FAIL")) {

            let ip = "";

            for (const char of str) {
                if (/[0-9.]/.test(char)) {
                    ip += char;

                } else {
                    break;
                };
            };

            if (result.includes(ip)) {
                return;
            };

            ipTest.push(ip);

            if (ipTest.length === 3) {
                result.push(ip);
                ipTest.length = 0;
                
            } else if () {

            };

        } else {
            ipTest.length = 0;
        };
    });

    return result.sort((a, b) => a.localeCompare(b));
};

console.log(detectBruteForce(
    [
        "9.9.9.9 LOGIN_FAIL user=a",
        "1.1.1.1 LOGIN_FAIL user=b",
        "9.9.9.9 LOGIN_FAIL user=a",
        "1.1.1.1 LOGIN_FAIL user=b",
        "9.9.9.9 LOGIN_FAIL user=a",
        "1.1.1.1 LOGIN_FAIL user=b"
    ]
));