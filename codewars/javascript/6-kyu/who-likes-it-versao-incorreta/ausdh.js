// Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
    for (let i = 0; i < names.length; i++) {
        let othersLength = names.slice(3).length

        switch (true) {
            case names.length === 1:
                return `${names[i]} likes this`

            case names.length === 2: 
                return `${names[i]} and ${names[i + 1]} like this`

            case names.length === 3:
                return `${names[i]}, ${names[i + 1]} and ${names[i + 2]} like this`

            case othersLength === 1:
                return `${names[i]}, ${names[i + 1]} and ${othersLength} other like this`

            case names.length > 3:
                return `${names[i]}, ${names[i + 1]} and ${othersLength} others like this`
                
            case names.length === 0:
                return "no one likes this"
        }
    }
}

console.log(likes(["mikael", "ana", "suellen", ""]))