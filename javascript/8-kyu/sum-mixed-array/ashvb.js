const sumMix = x => x.map(char => Number(char)).reduce((acc, currValue) => acc + currValue)

console.log(sumMix(["145", 4, 2]))