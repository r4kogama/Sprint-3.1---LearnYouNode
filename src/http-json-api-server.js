const http = require('http');
const port = process.argv[2];

const createJsonDate = (date, type) => {
    if(type === 'unix'){
        return  {
            'unixtime': date.getTime()//transform unix date
        }
    }else if (type === 'time'){
        return {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }
    }
}

const getJsonDate = (url, iso) => {
    if(url.pathname === '/api/parsetime'){
        return createJsonDate(iso, 'time');
    }else if(url.pathname === '/api/unixtime'){
        return createJsonDate(iso, 'unix')
    }
}

const server = http.createServer((req, res) => {
    let time;
    const url =  new URL(req.url, 'http://example.com');//parsear la URL con newURL
    const getIsoDate = new Date(url.searchParams.get('iso'))//extraer el value del parametro iso de la url, obteniendo una fecha 
    time = getJsonDate(url, getIsoDate);

    if(res.statusCode !== '404'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(time));
    }else{
        res.writeHead(404);
        res.end('error', () =>{ console.log(`Error Status Code: ${res.statusCode}`)});
    } 
})
server.listen(port, () =>{
    console.log(`Server listen on port ${port}`);
})


