// Link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
    word = word.toLowerCase(); 
    let counts = {};           
    
    for (let char of word) {   
        counts[char] = (counts[char] || 0) + 1;
    }

    let result = "";

    for (let char of word) {
        result += counts[char] > 1 ? ")" : "(";
    }

    return result; 
}

console.log(duplicateEncode("dinn")); 