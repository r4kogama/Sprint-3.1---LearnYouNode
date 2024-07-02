

const mymodule = require('./mymodule.js');
const extension = process.argv[3];
const folder = process.argv[2];

mymodule(folder, extension, (err, files) =>{
    if(err){
        return console.error(err);
    }
        
    files.map((e) =>{ 
        console.log(e);
    })
})


  