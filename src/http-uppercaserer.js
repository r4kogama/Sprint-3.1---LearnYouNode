const http = require('http');
const port = process.argv[2];
const pathFile = process.argv[3];
const mapStream = require('through2-map'); //"ArrayMap" transform stream que recibe un chunk data y lo devuelve modificado

 const server = http.createServer((req, res) => {
     if(req.method !== 'POST'){
        let statusCode = res.statusCode = 405; 
        return res.end(`Method Not Allowed code: ${statusCode}`);
     }
    req.setEncoding("utf8");
    res.setHeader('Content-Type', 'text/plain');
    const chunkUpper = req.pipe(
        mapStream(
            (chunk) => {
                return chunk.toString().toUpperCase();
            }
        )
    )
        chunkUpper.pipe(res);
    })
server.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})



