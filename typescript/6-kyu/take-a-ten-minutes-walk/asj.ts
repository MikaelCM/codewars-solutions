// Link: https://www.codewars.com/kata/54da539698b8a2ad76000228

export function isValidWalk(walk: string[]): boolean {
    if (walk.length !== 10) return false;
  
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
