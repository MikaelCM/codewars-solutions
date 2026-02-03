// Link: https://www.codewars.com/kata/69178eb3a22411a3aab31347

function decArrowPinCode(sticker: string): number[] {
    let posY = -1;
    let posX = -1;
    const up = "↑";
    const down = "↓";
    const left = "←";
    const right = "→";
    let star = `*`;

    const firstNumber = sticker[0] ?? "";
    const result: number[] = [];

    const numbers = [
        ["7", "8", "9"],
        ["4", "5", "6"],
        ["1", "2", "3"],
        ["0"]
    ];

    for (let i = 0; i <= numbers.length; i++) {
        const currArray = numbers[i] ?? [];

        if (currArray.length !== 0 && currArray.includes(firstNumber)) {

            for (let j = 0; j < currArray.length; j++) {
                if (currArray[j] === firstNumber) {
                    posY = i;
                    posX = j;

                } else {
                    continue;
                };

                let storage = "";

                for (const char of sticker) {

                    if (storage !== "" && storage.length < 2) {
                        storage += char;
                    };

                    switch (char) {
                        case up:
                            posY--;
                            break;

                        case down:
                            posY++;
                            break;

                        case left:
                            posX--;
                            break;

                        case right:
                            posX++;
                            break;

                        case star:
                            storage = star;
                            continue;
                    };

                    const currPosition = numbers[posY]?.[posX];

                    if (currPosition === undefined) return [];

                    if (storage.length === 2) {
                        const storageLastPos = Number(storage.slice(-1));
                        const timesRepeated = currPosition.repeat(storageLastPos).split("").map(Number);

                        result.push(...timesRepeated);

                        storage = "";

                        continue;
                    };

                    result.push(Number(currPosition));
                };
            };

        };
    };

    return result.map(Number);
};

console.log(decArrowPinCode("8←→←→*5")); //[8, 7, 8, 7, 8, 8, 8, 8, 8, 8]