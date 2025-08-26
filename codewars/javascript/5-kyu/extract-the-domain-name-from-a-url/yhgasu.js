// Link: https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url){
    let newUrl = url
    const http = "http://"
    const https = "https://"
    const ftp = "ftp://"
    const www = "www."

    switch (true) {
        case newUrl.startsWith(http):
            newUrl = newUrl.slice(http.length)
            break
        
        case newUrl.startsWith(https):
            newUrl = newUrl.slice(https.length)
            break
        
        case newUrl.startsWith(ftp):
            newUrl = newUrl.slice(ftp.length)
            break
    }

    if (newUrl.startsWith(www)) {
        newUrl = newUrl.slice(www.length)
    }
    
    return newUrl.split(".")[0]
}

console.log(domainName("http://github.com/carbonfive/raygun"))