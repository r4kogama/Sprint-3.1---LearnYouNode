
const http = require('http');
const bl = require('bl');

const datas = [];
let cont = 0;


const getUrls = (index) => {
    http.get(process.argv[2 + index], (res) => {
        res.pipe(bl((err, data) => {
            cont++;
            datas[index] = data.toString();
            if (cont === 3) {
                printDatas(datas);
            };
        })).on('error', (err) => {
            console.log('Pipe buffer error' + err)
        });
    }).on('error', (err) => {
        console.log('HTTP error: ' + err)
    })

}

const printDatas = (arrDatas) => {
    arrDatas.map((data)=>{
        console.log(data);
    }) 
}

for (let i = 0; i < 3; i++) {
    getUrls(i);
}
 

/* 
esta solucion no garantiza el orden
const urls = [process.argv[2], process.argv[3], process.argv[4]];

const getUrls = (path) => {
    http.get(path, (res) => {
        res.pipe(bl(( data) => {
            printDatas(data.toString());
        })).on('error', (err) => {
            console.log('Pipe buffer error' + err)
        });
    }).on('error', (err) => {
        console.log('HTTP error: ' + err)
    })

}

const printDatas = (content) => {
    console.log(content); 
}


const promiseGetUrl = async() => {
    try{
        let request = urls.map((url) => fetch(url))
        const asyncUrls = await Promise.all(request);
        asyncUrls.map((url) => {
            getUrls(url) 
        }) 
    }catch(err){
        console.log('Request promise error'+err);
    }
}

promiseGetUrl(); */