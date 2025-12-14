// Link: https://www.codewars.com/kata/5ca24526b534ce0018a137b5

export function sendMessage(message: string) {

    const numbers: Record<string, string> = {
        1: ".,?!",
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
        0: " ",
        "*": "'-+=",
    };

    // Place to put iterator results
    const storage: string[] = [];

    // Functions
    let isUpperCase = false;
    let lastKey = "";
    let lastWasHold = false;

    const toggleFontCase = (currLetter: string) => {

        const isLetter = /[a-zA-Z]/.test(currLetter);

        if (isLetter) {
            const charIsUpper = currLetter === currLetter.toUpperCase();

            if (charIsUpper !== isUpperCase) {
                storage.push("#");
                isUpperCase = charIsUpper;
                lastKey = "#";
            };
        };
    };

    const addSpace = (currKey: string) => {
        if (currKey === lastKey && !lastWasHold) {
            storage.push(" ");
        };
    };

    const addNumber = (char: string) => {
        if (/[0-9*#]/.test(char)) {

            if (char === lastKey && !lastWasHold) {
                storage.push(" ");
            };

            storage.push(char + "-");
            lastWasHold = true;
            lastKey = char;
            
            return true;
        };

        return false;
    };

    // Iterator
    for (let i = 0; i < message.length; i++) {

        if (addNumber(message[i])) {
            continue;
        };

        for (const key in numbers) {

            if (numbers[key] && (numbers[key].includes(message[i]) || numbers[key].includes(message[i].toLowerCase()))) {

                toggleFontCase(message[i]);

                addSpace(key);

                const lower = message[i].toLowerCase();
                const index = numbers[key].indexOf(lower);

                const charPosition = String(index + 1);

                const keyRepeated = key.repeat(Number(charPosition));

                storage.push(keyRepeated);

                lastKey = key;
                lastWasHold = false;
            }
        }
    }

    // Uniting the results
    return storage.join("");
}


console.log(sendMessage("Def Con 1!"));
