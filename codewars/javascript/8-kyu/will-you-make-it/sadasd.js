// Link: https://www.codewars.com/kata/5861d28f124b35723e00005e

const zeroFuel = (distanceToPump, milesPerGallon, fuelLeft) => milesPerGallon * fuelLeft >= distanceToPump ? true : false
    
console.log(zeroFuel(50, 25, 2))