// Link: https://www.codewars.com/kata/5848565e273af816fb000449

const encryptThis = (str: string): string => {
    let ascii = String(str.charCodeAt(0)); // Used on second and third cases in switch case.
    let secondPos: string;
    let lastPos: string;
    let result = ""; // I declared a value here cause, otherwise, it would be undefined.
    let rest;

    switch (true) {
        case str === "":
            result = "";
            break;

        case str.length === 1:
            result = ascii + " ";
            break;

        case !str.includes(" ") && str.length > 1:
            secondPos = str.slice(1, 2);
            lastPos = str.slice(-1);
            rest = str.slice(2, -1);

            result = ascii + lastPos + rest + secondPos;
            break;

        case str.includes(" "):
            let storage: string;

            str.split(" ").forEach(arr => {
                ascii = String(arr.charCodeAt(0));

                if (arr.length === 1) {
                    result += " " + ascii;

                } else if (arr.length === 2) {
                    secondPos = arr.slice(1, 2);

                    result += " " + ascii + secondPos;

                } else {
                    secondPos = arr.slice(1, 2);
                    lastPos = arr.slice(-1);

                    rest = arr.slice(2, -1);

                    storage = ascii + lastPos + rest + secondPos;

                    result += " " + storage;
                };
            });
            break;

        default:
            break;
    };

    return result.trim();

};

console.log(encryptThis("A wise old owl lived in an oak"));