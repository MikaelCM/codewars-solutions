// Link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

const number = function(busStops){
    const gotOnBus = busStops.reduce((acc, stop) => acc + stop[0], 0)
    const gotOutTheBus = busStops.reduce((acc, stop) => acc + stop[1], 0)

    return gotOnBus - gotOutTheBus
}

console.log(number([[1, 0], [10, 4], [0, 2], [3, 7]]))