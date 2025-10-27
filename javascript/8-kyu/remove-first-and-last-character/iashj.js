// Link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str){
  if (str.length < 2) {
    console.log("Insert 2 or more strings")
    
  } else if(str.length == 2) {
      return ""
    
  } else {
      return str.slice(1, -1)
    
    }
}

console.log(removeChar("Mikael"))