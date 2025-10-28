// Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

export function accum(s: string): string {
  const chars: string[] = s.toLowerCase().toString().split("");
  const result: string[] = [];
  let i: number = 0;
  
  while (i < chars.length) {
    let letter: string = chars[i].toUpperCase();
    let j: number = 0;
    
    while (j < i) {
      letter += chars[i]; 
      j++;
    }
    
    result.push(letter);
    i++;
  }
  
  return result.join("-")
} 