function isValidWalk(walk: string[]): boolean {
    let x: number = 0;
    let y: number = 0;

    for (const direction of walk) {
        if (direction === "n") {
            y++;

        } else if (direction === "s") {
            y--;

        } else if (direction === "e") {
            x++;

        } else if (direction === "w") {
            x--;
        } 
    }

    return x === 0 && y === 0;
}