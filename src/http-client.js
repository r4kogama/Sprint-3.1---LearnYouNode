
const http = require("http");
const path = process.argv[2];


http.get(path, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(chunk.toString());
    })
}).on('error', console.error)