// Link: https://www.codewars.com/kata/58663693b359c4a6560001d6

function mazeRunner(maze: number[][], directions: string[]): string {
    const wall = 1;
    const start = 2;
    const finish = 3;

    let row = -1;
    let column = -1;

    for (let i = 0; i < maze.length; i++) {
        let currRow = maze[i] ?? [];

        if (currRow.length !== 0 && currRow.includes(start)) {

            for (let j = 0; j < currRow.length; j++) {
                const currNumber = currRow[j] ?? -1;

                if (currNumber !== -1 && currNumber === start) {

                    column = j;
                    row = i;

                    for (const dir of directions) {
                        switch (dir) {
                            case "N":
                                row--;
                                break;

                            case "S":
                                row++;
                                break;

                            case "E":
                                column++;
                                break;

                            case "W":
                                column--;
                                break;

                            default:
                                break;
                        };

                        const currPosition = maze[row]?.[column] ?? -1;

                        if (currPosition === wall || currPosition === -1) {
                            return "Dead";

                        } else if (currPosition === finish) {
                            return "Finish";
                        };
                    };
                };
            };
        };
    };

    return "Lost";
};

console.log(mazeRunner(
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 3],
        [1, 0, 1, 0, 1, 0, 1],
        [0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 2, 1, 0, 1, 0, 1]
    ],
    ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"] // Output: "Finish"
));