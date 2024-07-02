


const http = require("http");
const path = process.argv[2];
const bl = require('bl');
const concat = require('concat-stream');

//bl
 http.get(path, (res)=> {
    res.pipe(bl( (err, data) => {
        data = data.toString();
        console.log(data.length)
        console.log(data)
     })).on('error', (err)=>{
        console.log('Pipe error'+ err)
    });
}).on('error', (err)=>{
    console.log('http error'+ err)
}); 

//concat
/*  http.get(path, (res)=> {
    res.pipe(concat({encoding : 'string'}, (err,data) => { 
        console.log(data.length)
        console.log(data)

    })).on('error', (err)=>{
        console.log('Pipe error'+ err)
    });

}).on('HTTP error', (err)=>{
    console.log(err)
});  */


/* http.get(path, ( res) => {
    //res.setEncoding('utf8');
    let datas = [];
    res.on('data', (chunk) =>{
        datas.push(chunk);
    })
    res.on('end', () => {
        datas = Buffer.concat(datas).toString('utf8').split(' ');
        
        datas.map(e =>{
            console.log(e);
          })
    })
}).on('error', err =>{
    console.log(err);
})  */