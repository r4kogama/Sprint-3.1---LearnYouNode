const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const pathFile = process.argv[3];

const server = http.createServer( (req, res) => {
    let src = fs.createReadStream(pathFile);
    src.pipe(res);
}).on('error', (err) => {
    console.log('server error: ' + err)
  })
  server.listen(port, () =>{
    console.log(`Server listens on port ${port}`)
  })