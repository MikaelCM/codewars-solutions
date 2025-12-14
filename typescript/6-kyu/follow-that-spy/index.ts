// Link: https://www.codewars.com/kata/5899a4b1a6648906fe000113

function findRoutes(routes: [string, string][] | string[][]): any {
    const storage: string[] = [];
    const allDestinations = routes.map(route => route[1]);
    let start = "";

    for (const array of routes) {
        const [from] = array;

        if (!allDestinations.includes(from)) {
            start = from;
            break;
        }
    };

    storage.push(start);

    for (let i = 0; i < routes.length; i++) {
        for (const array of routes) {
            const [from, to] = array;

            if (storage[storage.length - 1] === from && !storage.includes(to)) {
                storage.push(to);
            };
        };
    };

    return storage;
};

console.log(findRoutes([ 
    ["USA", "BRA"], 
    ["JPN", "PHL"], 
    ["BRA", "UAE"], 
    ["UAE", "JPN"] 
]))