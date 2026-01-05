// Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str: string) {
    const caseInsensitive = str.toLowerCase();
    let storage: string = "";

    for (const char of caseInsensitive) {
        if (storage.includes(char)) return false;

        storage += char;
    }

    return true;
}

console.log(isIsogram("aba"));