// Link: https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3

export function makeLooper(str: string): () => string {
    let i = 0;

    const result = () => {
        let storage = str[i];
        i++;

        if (i >= str.length) {
            i = 0;
        }
        
        return storage;
    };
    
    return result;

}

const abc = makeLooper("abc")

console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());