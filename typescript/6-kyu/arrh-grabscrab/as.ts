const showAnagramCounter = (anagram: string): Record<string, number> => {
    const anaChars = anagram.split("");
    const anaTimesAppeared: Record<string, number> = {};

    for (const char of anaChars) {
        anaTimesAppeared[char] = (anaTimesAppeared[char] || 0) + 1;
    };

    return anaTimesAppeared;
};

const compareValues = (dictionary: string[], anagram: string, anaResult: Record<string, number>): string[] => {
    let result: string[] = [];

    const anaLength = anagram.length;
    let dicCounter: Record<string, number> = {};

    for (const str of dictionary) {
        let isValid = false;

        if (str.length !== anaLength) {
            continue;
        };

        for (const char of str) {
            dicCounter[char] = (dicCounter[char] || 0) + 1;
        };

        for (const key in dicCounter) {
            if (key in anaResult && anaResult[key] === dicCounter[key]) {
                isValid = true;

            } else {
                isValid = false;
                break;
            };

        };

        if (isValid) {
            result.push(str);
        };

        dicCounter = {};
    };

    return result;
};

export function grabscrab(anagram: string, dictionary: string[]): string[] {
    const anaResult = showAnagramCounter(anagram);

    return compareValues(dictionary, anagram, anaResult);
};