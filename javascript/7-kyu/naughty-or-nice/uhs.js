// Link: https://www.codewars.com/kata/5662b14e0a1fb8320a00005c

function naughtyOrNice(data) {
    let naughtyCount = 0
    let niceCount = 0

    for (let month of Object.keys(data)) {

        for (let day of Object.keys(data[month])) {
            if (data[month][day] === "Naughty") naughtyCount++
            else niceCount++
        }   
    }

    if (niceCount >= naughtyCount) return "Nice!"
    else return "Naughty!"
}

console.log(naughtyOrNice({January: {"1": "Naughty", "2": "Nice", "3": "Naughty"}, February: {"1": "Nice", "2": "Nice"}}))